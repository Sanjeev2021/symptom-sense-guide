
import TabCard from "@/components/TabCard";

export default function Home() {
  return (
    <div className="w-full flex justify-center min-h-[70vh] py-10 animate-fade-in">
      <TabCard
        // pass-through props for TabCard
        onToThankYou={()=>{}}
        onSymptomAnalyze={()=>{}}
        activeTab="register"
        setActiveTab={()=>{}}
      />
    </div>
  );
}
