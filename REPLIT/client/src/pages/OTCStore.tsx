import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingCart, Truck, MapPin } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function OTCStore() {
  // SEO: Update page title for OTC store searches
  useEffect(() => {
    document.title = "OTC Online Store | Georgies Pharmacy | Over-the-Counter Medications NJ";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const categories = ["All", "Cold & Flu", "Pain Relief", "Vitamins", "Digestive Health"];

  const products: Product[] = [
    {
      id: "1",
      name: "Tylenol Extra Strength 500mg",
      description: "100 Caplets",
      price: 12.99,
      image: "https://via.placeholder.com/300x300?text=Tylenol+500mg",
      category: "Pain Relief"
    },
    {
      id: "2", 
      name: "Advil Ibuprofen 200mg",
      description: "100 Tablets",
      price: 9.99,
      image: "https://via.placeholder.com/300x300?text=Advil+200mg",
      category: "Pain Relief"
    },
    {
      id: "3",
      name: "Mucinex DM 12-Hour",
      description: "20 Extended-Release Tablets",
      price: 16.99,
      image: "https://via.placeholder.com/300x300?text=Mucinex+DM",
      category: "Cold & Flu"
    },
    {
      id: "4",
      name: "Vitamin D3 2000 IU",
      description: "100 Softgels",
      price: 8.99,
      image: "https://via.placeholder.com/300x300?text=Vitamin+D3",
      category: "Vitamins"
    },
    {
      id: "5",
      name: "Pepto-Bismol Original",
      description: "12 fl oz Liquid",
      price: 7.49,
      image: "https://via.placeholder.com/300x300?text=Pepto+Bismol",
      category: "Digestive Health"
    },
    {
      id: "6",
      name: "Sudafed PE Congestion Relief",
      description: "36 Tablets",
      price: 11.99,
      image: "https://via.placeholder.com/300x300?text=Sudafed+PE",
      category: "Cold & Flu"
    },
    {
      id: "7",
      name: "Centrum Adult Multivitamin",
      description: "100 Tablets",
      price: 14.99,
      image: "https://via.placeholder.com/300x300?text=Centrum+Adult",
      category: "Vitamins"
    },
    {
      id: "8",
      name: "Tums Ultra Strength",
      description: "72 Chewable Tablets",
      price: 6.99,
      image: "https://via.placeholder.com/300x300?text=Tums+Ultra",
      category: "Digestive Health"
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />
      
      {/* Header */}
      <header className="bg-primary text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Georgies Pharmacy – OTC Online Store</h1>
          <p className="text-primary-foreground/90 flex items-center gap-2">
            <Truck className="h-4 w-4" />
            Free delivery & pickup at all NJ locations
          </p>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Cart Summary */}
          {getTotalItems() > 0 && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <ShoppingCart className="h-4 w-4" />
                <span className="font-medium">{getTotalItems()} items in cart</span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Products Grid */}
      <section className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col h-full">
                <CardHeader className="p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                  <p className="text-sm text-slate-600">{product.description}</p>
                </CardHeader>
                
                <CardContent className="p-4 pt-0 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <span className="text-2xl font-bold text-primary mb-4 block">
                      ${product.price.toFixed(2)}
                    </span>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          Pickup Location:
                        </label>
                        <Select defaultValue="parlin">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="parlin">Georgies Parlin Pharmacy</SelectItem>
                            <SelectItem value="family">Georgies Family Pharmacy (Linden)</SelectItem>
                            <SelectItem value="specialty">Georgies Specialty Pharmacy (Linden)</SelectItem>
                            <SelectItem value="outpatient">Georgies Outpatient Pharmacy (Browns Mills)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          <Truck className="h-3 w-3 inline mr-1" />
                          Service:
                        </label>
                        <Select defaultValue="delivery">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="delivery">Free Delivery</SelectItem>
                            <SelectItem value="pickup">Store Pickup</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => addToCart(product.id)}
                    className="w-full mt-auto"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                    {cart[product.id] && (
                      <span className="ml-2 bg-white text-primary px-2 py-1 rounded-full text-xs">
                        {cart[product.id]}
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Store Information */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Shop OTC with Georgies Pharmacy?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Free Delivery</h3>
                <p className="text-sm text-slate-600">Same-day delivery to your door from all NJ locations</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">4 Convenient Locations</h3>
                <p className="text-sm text-slate-600">Pickup from Linden, Parlin, or Browns Mills</p>
              </div>
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Guidance</h3>
                <p className="text-sm text-slate-600">Pharmacist consultation available for all OTC products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}