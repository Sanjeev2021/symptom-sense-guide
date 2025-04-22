
import { useState } from "react";
import { symptoms } from "@/constants/symptoms";
import { Button } from "@/components/ui/button";

interface SymptomCheckerProps {
  onAnalyze: (selected: string[]) => void;
}

export default function SymptomChecker({ onAnalyze }: SymptomCheckerProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setSelected(selectedOptions);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected.length === 0) {
      setError("Please select at least one symptom");
      return;
    }
    onAnalyze(selected);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <h4 className="text-xl text-center">🩺 Check Your Symptoms</h4>
      <p className="text-center text-gray-500">Select your symptoms and get personalized health insights</p>
      <div>
        <label className="block font-medium mb-1">Select Your Symptoms</label>
        <select multiple name="symptoms"
          onChange={handleChange}
          value={selected}
          className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[120px] bg-blue-50"
        >
          {symptoms.map(symp => (
            <option key={symp} value={symp}>
              {symp.replace(/_/g, " ").replace(/^\w/, c => c.toUpperCase())}
            </option>
          ))}
        </select>
        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      </div>
      <div className="text-center">
        <Button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-800 font-bold py-2 px-8 transition-all">
          Analyze Symptoms
        </Button>
      </div>
    </form>
  );
}
