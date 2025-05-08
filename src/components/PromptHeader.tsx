
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const PromptHeader: React.FC = () => {
  return (
    <header className="text-center py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-spark-blue/20 to-transparent opacity-70 -z-10"></div>
      
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-prompt-gradient animate-pulse-slow mb-4">
        Spark of Phrases
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
        Generate creative prompts for writing, brainstorming, or AI interactions. 
        Find inspiration with just a click.
      </p>
      
      <div className="flex justify-center gap-3">
        <Button variant="default" className="bg-prompt-gradient hover:opacity-90 transition-all gap-2">
          <Sparkles size={16} />
          <span>Get Started</span>
        </Button>
      </div>
      
      <div className="absolute -bottom-16 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-background/10 -z-10"></div>
    </header>
  );
};

export default PromptHeader;
