
import { useState } from "react";
import Navbar from "@/components/Navbar";
import TabCard from "@/components/TabCard";
import SymptomResults from "@/components/SymptomResults";
import ThankYou from "@/components/ThankYou";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"register" | "symptoms">("register");
  const [showResults, setShowResults] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouName, setThankYouName] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  // Show thank you after registration
  const handleToThankYou = (name: string) => {
    setThankYouName(name);
    setShowThankYou(true);
  };

  // On "Continue", show symptom checker tab
  const handleContinueFromThankYou = () => {
    setShowThankYou(false);
    setActiveTab("symptoms");
  };

  // On symptoms analyzed, show results card
  const handleAnalyze = (syms: string[]) => {
    setSelectedSymptoms(syms);
    setShowResults(true);
  };

  // Back button: return to symptom checker
  const handleResultsBack = () => {
    setShowResults(false);
  };

  return (
    <div className="min-h-screen pb-12 bg-main-gradient">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full min-h-[70vh] px-2 mx-auto mt-10">
        {showThankYou ? (
          <ThankYou name={thankYouName} onContinue={handleContinueFromThankYou} />
        ) : showResults ? (
          <SymptomResults selectedSymptoms={selectedSymptoms} onBack={handleResultsBack} />
        ) : (
          <TabCard
            onToThankYou={handleToThankYou}
            onSymptomAnalyze={handleAnalyze}
            activeTab={activeTab}
            setActiveTab={(tab) =>
              setActiveTab(tab === "register" ? "register" : "symptoms")
            }
          />
        )}
      </div>
    </div>
  );
};

export default Index;
