
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { PromptCard } from "./PromptCard";
import { promptCategories, placeholders, PromptCategory } from "@/data/promptData";
import { Sparkles, Copy, History, Edit } from "lucide-react";
import CustomPromptInput from "./CustomPromptInput";

interface GeneratedPrompt {
  id: string;
  text: string;
  category: string;
  timestamp: number;
  isCustom?: boolean;
}

const PromptGenerator: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("creative-writing");
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [promptHistory, setPromptHistory] = useState<GeneratedPrompt[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showCustomInput, setShowCustomInput] = useState<boolean>(false);
  const [customPrompts, setCustomPrompts] = useState<{category: string, templates: string[]}[]>([]);
  
  // Load prompt history and custom prompts from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("promptHistory");
    if (savedHistory) {
      try {
        setPromptHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Error loading prompt history:", e);
      }
    }
    
    const savedCustomPrompts = localStorage.getItem("customPrompts");
    if (savedCustomPrompts) {
      try {
        setCustomPrompts(JSON.parse(savedCustomPrompts));
      } catch (e) {
        console.error("Error loading custom prompts:", e);
      }
    }
  }, []);
  
  // Save prompt history to localStorage whenever it changes
  useEffect(() => {
    if (promptHistory.length > 0) {
      localStorage.setItem("promptHistory", JSON.stringify(promptHistory));
    }
  }, [promptHistory]);

  // Save custom prompts to localStorage whenever they change
  useEffect(() => {
    if (customPrompts.length > 0) {
      localStorage.setItem("customPrompts", JSON.stringify(customPrompts));
    }
  }, [customPrompts]);

  const generatePrompt = () => {
    setIsGenerating(true);
    
    // Find the selected category
    const category = promptCategories.find(c => c.id === currentCategory);
    if (!category) {
      toast.error("Category not found");
      setIsGenerating(false);
      return;
    }
    
    // Get a random template from the category
    const randomTemplate = category.templates[Math.floor(Math.random() * category.templates.length)];
    
    // Replace placeholders with random examples
    let filledPrompt = randomTemplate;
    
    // Find all placeholders in the template using regex
    const placeholderRegex = /\[([^\]]+)\]/g;
    const matches = [...randomTemplate.matchAll(placeholderRegex)];
    
    // Replace each placeholder with a random example
    matches.forEach(match => {
      const placeholder = match[0];
      const placeholderData = placeholders[placeholder];
      
      if (placeholderData && placeholderData.examples.length > 0) {
        const randomExample = placeholderData.examples[Math.floor(Math.random() * placeholderData.examples.length)];
        filledPrompt = filledPrompt.replace(placeholder, randomExample);
      }
    });
    
    // Add a slight delay for visual effect
    setTimeout(() => {
      setGeneratedPrompt(filledPrompt);
      
      // Add to history
      const newPrompt: GeneratedPrompt = {
        id: Date.now().toString(),
        text: filledPrompt,
        category: category.name,
        timestamp: Date.now()
      };
      
      setPromptHistory(prev => [newPrompt, ...prev].slice(0, 20)); // Keep only 20 most recent prompts
      setIsGenerating(false);
    }, 600);
  };

  const copyToClipboard = () => {
    if (!generatedPrompt) return;
    
    navigator.clipboard.writeText(generatedPrompt)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(err => {
        toast.error("Failed to copy");
        console.error("Copy failed: ", err);
      });
  };

  const clearHistory = () => {
    setPromptHistory([]);
    localStorage.removeItem("promptHistory");
    toast.success("History cleared");
  };
  
  const handleSaveCustomPrompt = (category: string, promptText: string) => {
    // Check if we already have this category
    const existingCategoryIndex = customPrompts.findIndex(
      cp => cp.category.toLowerCase() === category.toLowerCase()
    );
    
    if (existingCategoryIndex >= 0) {
      // Add to existing category
      const updatedPrompts = [...customPrompts];
      updatedPrompts[existingCategoryIndex].templates.push(promptText);
      setCustomPrompts(updatedPrompts);
    } else {
      // Create new category
      setCustomPrompts([
        ...customPrompts,
        {
          category: category,
          templates: [promptText]
        }
      ]);
    }
    
    // Add to history
    const newPrompt: GeneratedPrompt = {
      id: Date.now().toString(),
      text: promptText,
      category: category,
      timestamp: Date.now(),
      isCustom: true
    };
    
    setPromptHistory(prev => [newPrompt, ...prev].slice(0, 20));
    setShowCustomInput(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <Tabs defaultValue={currentCategory} onValueChange={setCurrentCategory} className="mb-8">
        <TabsList className="mb-4 mx-auto grid w-full max-w-xl grid-cols-2 md:grid-cols-4">
          {promptCategories.map(category => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="text-sm sm:text-base"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {promptCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <p className="text-center text-muted-foreground mb-6">
              {category.description}
            </p>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            onClick={generatePrompt}
            disabled={isGenerating}
            className="bg-prompt-gradient hover:opacity-90 transition-all flex gap-2 px-8 py-6 text-lg"
          >
            <Sparkles size={18} />
            <span>{isGenerating ? "Generating..." : "Generate Prompt"}</span>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowCustomInput(!showCustomInput)}
            className="flex gap-2 px-8 py-6 text-lg border-purple-200 dark:border-purple-800"
          >
            <Edit size={18} />
            <span>{showCustomInput ? "Hide Input" : "Add Your Idea"}</span>
          </Button>
        </div>
        
        {showCustomInput && (
          <CustomPromptInput onSavePrompt={handleSaveCustomPrompt} />
        )}
        
        {generatedPrompt && (
          <Card className="w-full bg-white dark:bg-gray-800 shadow-lg border border-purple-100 dark:border-purple-900/20 overflow-hidden">
            <CardContent className="p-6 relative">
              <p className="text-lg font-medium leading-relaxed py-2 px-1">
                {generatedPrompt}
              </p>
              
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="flex items-center gap-1"
                >
                  <Copy size={14} /> Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="w-full pt-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              className="flex items-center gap-2"
              onClick={() => setShowHistory(!showHistory)}
            >
              <History size={16} />
              {showHistory ? "Hide History" : "Show History"}
            </Button>
            
            {showHistory && promptHistory.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearHistory}
                className="text-sm"
              >
                Clear History
              </Button>
            )}
          </div>
          
          {showHistory && (
            <div className="space-y-4">
              {promptHistory.length === 0 ? (
                <p className="text-center text-muted-foreground py-6">No prompt history yet</p>
              ) : (
                promptHistory.map(prompt => (
                  <PromptCard
                    key={prompt.id}
                    prompt={prompt.text}
                    category={prompt.category}
                    timestamp={prompt.timestamp}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
