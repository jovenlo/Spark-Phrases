
import PromptHeader from "@/components/PromptHeader";
import PromptGenerator from "@/components/PromptGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 mx-auto">
        <PromptHeader />
        <PromptGenerator />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
