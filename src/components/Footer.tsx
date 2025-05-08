
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 pb-8">
      <Separator className="mb-6" />
      <div className="container px-4 flex flex-col items-center justify-center text-center">
        <p className="text-sm text-muted-foreground">
          Spark of Phrases &copy; {new Date().getFullYear()}. Your creative companion.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          All generated prompts are for creative inspiration.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
