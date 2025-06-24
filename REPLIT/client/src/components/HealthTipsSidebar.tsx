import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, RefreshCw, Heart, Pill, Activity, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface HealthTip {
  id: string;
  title: string;
  content: string;
  category: "medication" | "wellness" | "nutrition" | "exercise" | "general";
  relevance: "high" | "medium" | "low";
  source?: string;
}

interface HealthTipsSidebarProps {
  patientId?: number;
  medications?: string[];
  className?: string;
}

const categoryIcons = {
  medication: Pill,
  wellness: Heart,
  nutrition: Activity,
  exercise: Activity,
  general: Lightbulb,
};

const categoryColors = {
  medication: "bg-primary/10 text-primary",
  wellness: "bg-green-100 text-green-700",
  nutrition: "bg-blue-100 text-blue-700",
  exercise: "bg-orange-100 text-orange-700",
  general: "bg-purple-100 text-purple-700",
};

export default function HealthTipsSidebar({ patientId, medications = [], className = "" }: HealthTipsSidebarProps) {
  const [tips, setTips] = useState<HealthTip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateHealthTips = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/health-tips/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientId,
          medications,
          preferences: ["general_wellness", "medication_adherence"],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate health tips");
      }

      const data = await response.json();
      setTips(data.tips || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load health tips");
      // Fallback tips if API fails
      setTips([
        {
          id: "1",
          title: "Take Medications as Prescribed",
          content: "Always take your medications at the same time each day to maintain consistent levels in your system. Set reminders if needed.",
          category: "medication",
          relevance: "high",
        },
        {
          id: "2",
          title: "Stay Hydrated",
          content: "Drink at least 8 glasses of water daily. Proper hydration helps your body process medications effectively.",
          category: "wellness",
          relevance: "medium",
        },
        {
          id: "3",
          title: "Regular Exercise",
          content: "Aim for 30 minutes of moderate exercise daily. Consult your pharmacist about any exercise restrictions with your medications.",
          category: "exercise",
          relevance: "medium",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateHealthTips();
  }, [patientId, medications.join(",")]);

  const renderTipContent = (tip: HealthTip) => {
    const IconComponent = categoryIcons[tip.category];
    
    return (
      <Card key={tip.id} className="mb-4 border-l-4 border-l-primary">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <IconComponent className="h-4 w-4 text-primary" />
              <CardTitle className="text-sm font-semibold">{tip.title}</CardTitle>
            </div>
            <Badge variant="outline" className={`text-xs ${categoryColors[tip.category]}`}>
              {tip.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-slate-600 leading-relaxed">{tip.content}</p>
          {tip.source && (
            <p className="text-xs text-slate-400 mt-2">Source: {tip.source}</p>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderSkeleton = () => (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="border-l-4 border-l-slate-200">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-32" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className={`bg-white rounded-lg border border-slate-200 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-slate-900">AI Health Tips</h3>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={generateHealthTips}
          disabled={loading}
          className="text-primary border-primary hover:bg-primary hover:text-white"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {loading ? renderSkeleton() : tips.map(renderTipContent)}
      </div>

      {tips.length === 0 && !loading && (
        <div className="text-center py-8">
          <Brain className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">No health tips available</p>
          <Button
            variant="outline"
            size="sm"
            onClick={generateHealthTips}
            className="mt-2"
          >
            Generate Tips
          </Button>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-slate-200">
        <p className="text-xs text-slate-500 text-center">
          AI-powered health tips are for informational purposes only. Always consult your healthcare provider for medical advice.
        </p>
      </div>
    </div>
  );
}