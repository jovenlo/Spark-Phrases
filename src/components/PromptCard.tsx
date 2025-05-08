
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

interface PromptCardProps {
  prompt: string;
  category: string;
  timestamp: number;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, category, timestamp }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(err => {
        toast.error("Failed to copy");
        console.error("Copy failed: ", err);
      });
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <Card className="overflow-hidden border-gray-200 dark:border-gray-800 hover:shadow-md transition-all">
      <CardContent className="p-4">
        <p className="text-base">{prompt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs font-normal">
            {category}
          </Badge>
          <span className="text-xs text-gray-500">{formatDate(timestamp)}</span>
        </div>
        <Button 
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={copyToClipboard}
        >
          <Copy size={14} />
          <span className="sr-only">Copy</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
