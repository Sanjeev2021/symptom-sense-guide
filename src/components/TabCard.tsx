
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrationForm from "./RegistrationForm";
import SymptomChecker from "./SymptomChecker";

interface TabCardProps {
  onToThankYou: (name: string) => void;
  onSymptomAnalyze: (selected: string[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabCard({ onToThankYou, onSymptomAnalyze, activeTab, setActiveTab }: TabCardProps) {
  return (
    <div className="glass shadow-xl rounded-3xl max-w-xl mx-auto overflow-hidden min-w-[320px] border-[2px] border-purple-200/50">
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 text-white px-8 py-7 text-center">
        <h2 className="text-2xl font-bold flex justify-center items-center gap-2 drop-shadow">
          <span role="img" aria-label="doctor">👨‍⚕️</span>
          Personalized Health Assistant
        </h2>
        <p className="mt-1 opacity-90">Your virtual healthcare companion</p>
      </div>
      <Tabs value={activeTab} className="w-full" onValueChange={setActiveTab}>
        <TabsList className="flex w-full bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 px-8 py-2 gap-2 rounded-t-xl mt-0 border-b border-blue-100">
          <TabsTrigger value="register" className="flex-1">Register</TabsTrigger>
          <TabsTrigger value="symptoms" className="flex-1">Symptom Checker</TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="px-8 py-8">
          <RegistrationForm onToThankYou={onToThankYou} />
        </TabsContent>
        <TabsContent value="symptoms" className="px-8 py-8">
          <SymptomChecker onAnalyze={onSymptomAnalyze} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
