interface HealthTip {
  id: string;
  title: string;
  content: string;
  category: "medication" | "wellness" | "nutrition" | "exercise" | "general";
  relevance: "high" | "medium" | "low";
  source?: string;
}

interface GenerateHealthTipsParams {
  patientId?: number;
  medications: string[];
  preferences: string[];
}

export async function generateHealthTips(
  patientId?: number,
  medications: string[] = [],
  preferences: string[] = []
): Promise<HealthTip[]> {
  try {
    // Check if Perplexity API key is available
    const perplexityApiKey = process.env.PERPLEXITY_API_KEY;
    
    if (!perplexityApiKey) {
      console.log("Perplexity API key not found, using fallback tips");
      return getFallbackHealthTips(medications);
    }

    // Prepare the prompt for Perplexity
    const prompt = createHealthTipsPrompt(medications, preferences);
    
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful pharmacy AI assistant providing evidence-based health tips. Always recommend consulting healthcare providers for medical decisions.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.3,
        top_p: 0.9,
        return_images: false,
        return_related_questions: false,
        search_recency_filter: 'month',
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      throw new Error("No response from AI");
    }

    // Parse AI response into structured health tips
    const parsedTips = parseAIResponse(aiResponse);
    
    return parsedTips.length > 0 ? parsedTips : getFallbackHealthTips(medications);
    
  } catch (error) {
    console.error("Error generating AI health tips:", error);
    return getFallbackHealthTips(medications);
  }
}

function createHealthTipsPrompt(medications: string[], preferences: string[]): string {
  let prompt = "Provide 3-4 personalized health tips in JSON format. Each tip should have: id, title, content, category (medication/wellness/nutrition/exercise/general), and relevance (high/medium/low).";
  
  if (medications.length > 0) {
    prompt += ` Patient medications: ${medications.join(", ")}.`;
  }
  
  if (preferences.length > 0) {
    prompt += ` Focus areas: ${preferences.join(", ")}.`;
  }
  
  prompt += " Keep tips practical, evidence-based, and under 100 words each. Always recommend consulting healthcare providers.";
  
  return prompt;
}

function parseAIResponse(response: string): HealthTip[] {
  try {
    // Try to extract JSON from the response
    const jsonMatch = response.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const tips = JSON.parse(jsonMatch[0]);
      return tips.map((tip: any, index: number) => ({
        id: tip.id || `ai-tip-${index + 1}`,
        title: tip.title || "Health Tip",
        content: tip.content || tip.description || "",
        category: tip.category || "general",
        relevance: tip.relevance || "medium",
        source: "AI-Generated",
      }));
    }
    
    // If no JSON found, try to parse structured text
    return parseStructuredText(response);
    
  } catch (error) {
    console.error("Error parsing AI response:", error);
    return [];
  }
}

function parseStructuredText(text: string): HealthTip[] {
  const tips: HealthTip[] = [];
  const lines = text.split('\n').filter(line => line.trim());
  
  let currentTip: Partial<HealthTip> = {};
  let tipCounter = 1;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (trimmedLine.toLowerCase().includes('tip') || trimmedLine.match(/^\d+\./)) {
      // Start of a new tip
      if (currentTip.title && currentTip.content) {
        tips.push({
          id: `ai-tip-${tipCounter}`,
          title: currentTip.title,
          content: currentTip.content,
          category: currentTip.category || "general",
          relevance: currentTip.relevance || "medium",
          source: "AI-Generated",
        });
        tipCounter++;
      }
      
      currentTip = {
        title: trimmedLine.replace(/^\d+\.\s*/, '').replace(/^tip\s*\d*:?\s*/i, ''),
      };
    } else if (trimmedLine && currentTip.title && !currentTip.content) {
      currentTip.content = trimmedLine;
      currentTip.category = inferCategory(currentTip.title + " " + currentTip.content);
    }
  }
  
  // Add the last tip
  if (currentTip.title && currentTip.content) {
    tips.push({
      id: `ai-tip-${tipCounter}`,
      title: currentTip.title,
      content: currentTip.content,
      category: currentTip.category || "general",
      relevance: currentTip.relevance || "medium",
      source: "AI-Generated",
    });
  }
  
  return tips;
}

function inferCategory(text: string): "medication" | "wellness" | "nutrition" | "exercise" | "general" {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('medication') || lowerText.includes('prescription') || lowerText.includes('dose')) {
    return 'medication';
  }
  if (lowerText.includes('exercise') || lowerText.includes('physical') || lowerText.includes('activity')) {
    return 'exercise';
  }
  if (lowerText.includes('nutrition') || lowerText.includes('diet') || lowerText.includes('food') || lowerText.includes('eat')) {
    return 'nutrition';
  }
  if (lowerText.includes('wellness') || lowerText.includes('mental') || lowerText.includes('stress')) {
    return 'wellness';
  }
  
  return 'general';
}

function getFallbackHealthTips(medications: string[]): HealthTip[] {
  const baseTips = [
    {
      id: "fallback-1",
      title: "Medication Adherence",
      content: "Take your medications at the same time each day to maintain consistent levels. Use pill organizers or phone reminders if helpful.",
      category: "medication" as const,
      relevance: "high" as const,
    },
    {
      id: "fallback-2",
      title: "Stay Hydrated",
      content: "Drink 8-10 glasses of water daily. Proper hydration helps your body process medications effectively and supports overall health.",
      category: "wellness" as const,
      relevance: "high" as const,
    },
    {
      id: "fallback-3",
      title: "Regular Exercise",
      content: "Aim for 30 minutes of moderate exercise most days. Consult your healthcare provider about any restrictions with your current medications.",
      category: "exercise" as const,
      relevance: "medium" as const,
    },
    {
      id: "fallback-4",
      title: "Balanced Nutrition",
      content: "Eat a balanced diet rich in fruits, vegetables, and whole grains. Some medications work better with food, others on an empty stomach.",
      category: "nutrition" as const,
      relevance: "medium" as const,
    },
  ];
  
  // Add medication-specific tips if medications are provided
  if (medications.length > 0) {
    baseTips.unshift({
      id: "fallback-medication",
      title: "Monitor Your Medications",
      content: `You're taking ${medications.length} medication${medications.length > 1 ? 's' : ''}. Keep track of any side effects and discuss them with your pharmacist during your next visit.`,
      category: "medication",
      relevance: "high",
    });
  }
  
  return baseTips.slice(0, 4); // Return up to 4 tips
}