
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { Edit, Wand2 } from "lucide-react";

interface CustomPromptProps {
  onSavePrompt: (category: string, promptText: string) => void;
}

const CustomPromptInput: React.FC<CustomPromptProps> = ({ onSavePrompt }) => {
  const [userIdea, setUserIdea] = useState<string>("");
  const [formattedPrompt, setFormattedPrompt] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  
  const formatUserIdea = () => {
    if (!userIdea.trim()) {
      toast.error("Please enter an idea first");
      return;
    }
    
    setIsGenerating(true);
    
    // Process the user idea into a more structured prompt
    setTimeout(() => {
      const idea = userIdea.trim();
      let newPrompt = "";
      
      // Check if the idea already ends with a question mark
      if (idea.endsWith("?")) {
        newPrompt = idea;
      } else if (idea.length < 15) {
        // For very short ideas, expand them into a question
        newPrompt = `Describe in detail how you would create ${idea}?`;
      } else if (idea.toLowerCase().startsWith("how") || 
                idea.toLowerCase().startsWith("what") || 
                idea.toLowerCase().startsWith("why")) {
        // If it's already a question-like format, just add a question mark if needed
        newPrompt = idea.endsWith("?") ? idea : `${idea}?`;
      } else {
        // Structure the idea as a prompt with context
        const sentences = idea.split(/[.!?]+/).filter(s => s.trim().length > 0);
        
        if (sentences.length > 1) {
          // For multi-sentence ideas, create a more complex prompt
          newPrompt = `Given the context: "${sentences[0].trim()}". ${sentences.slice(1).join(". ")}?`;
        } else {
          // For single sentence ideas, create an exploration prompt
          newPrompt = `Explore the concept of ${idea} in detail, considering different perspectives and applications.`;
        }
      }
      
      setFormattedPrompt(newPrompt);
      setIsGenerating(false);
    }, 500); // Small delay for visual effect
  };

  const handleSavePrompt = () => {
    if (!formattedPrompt.trim()) {
      if (!userIdea.trim()) {
        toast.error("Please enter an idea first");
      } else {
        formatUserIdea();
        toast.error("Please format your idea first");
      }
      return;
    }
    
    if (!category.trim()) {
      toast.error("Please enter a category");
      return;
    }
    
    onSavePrompt(category, formattedPrompt);
    toast.success("Your prompt was saved!");
    
    // Clear the form
    setUserIdea("");
    setFormattedPrompt("");
    setCategory("");
  };

  return (
    <Card className="w-full bg-white dark:bg-gray-800 shadow-lg border border-purple-100 dark:border-purple-900/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center mb-2">
            <Edit className="mr-2" size={18} />
            <h3 className="text-lg font-medium">Transform Your Idea Into a Prompt</h3>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              placeholder="e.g., Creative Writing, Business, Art"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="user-idea">Your Idea</Label>
            <Textarea
              id="user-idea"
              placeholder="Enter your idea here..."
              value={userIdea}
              onChange={(e) => setUserIdea(e.target.value)}
              className="min-h-[80px] w-full"
            />
          </div>
          
          <Button 
            onClick={formatUserIdea}
            variant="outline"
            disabled={isGenerating || !userIdea.trim()}
            className="w-full flex items-center justify-center gap-2"
          >
            <Wand2 size={16} />
            {isGenerating ? "Formatting..." : "Format as Prompt"}
          </Button>
          
          {formattedPrompt && (
            <div className="space-y-2 pt-2">
              <Label htmlFor="formatted-prompt">Formatted Prompt</Label>
              <Textarea
                id="formatted-prompt"
                value={formattedPrompt}
                onChange={(e) => setFormattedPrompt(e.target.value)}
                className="min-h-[120px] w-full bg-purple-50 dark:bg-purple-900/20 border-purple-200"
              />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-end">
        <Button 
          onClick={handleSavePrompt}
          className="bg-gradient-to-r from-spark-purple to-spark-blue text-white"
          disabled={!category.trim() || (!formattedPrompt.trim() && !userIdea.trim())}
        >
          Save Prompt
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomPromptInput;
