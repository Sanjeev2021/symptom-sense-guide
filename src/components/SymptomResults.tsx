
import { useState } from "react";
import ConsultationDialog from "./ConsultationDialog";
import { Button } from "@/components/ui/button";

interface ResultData {
  disease: string;
  description: string;
  medications: string;
}

function getDiagnosis(selected: string[]): ResultData {
  if (selected.includes("headache") || selected.includes("fever")) {
    return {
      disease: "Common Cold",
      description:
        "A common cold is a viral infection primarily affecting the nose and throat. It's usually harmless, although it might not feel that way.",
      medications:
        "Rest, stay hydrated, and consider over-the-counter medications like acetaminophen for symptom relief. Consult a doctor if symptoms worsen or persist beyond a week.",
    };
  }
  return {
    disease: "General Fatigue",
    description: "Fatigue is a common symptom in many illnesses. It may be related to lifestyle factors or could indicate an underlying medical condition.",
    medications: "Ensure adequate rest and hydration. Consider reviewing your diet and exercise routine. If fatigue persists, please consult with a healthcare provider.",
  };
}

interface SymptomResultsProps {
  selectedSymptoms: string[];
  onBack: () => void;
}

export default function SymptomResults({ selectedSymptoms, onBack }: SymptomResultsProps) {
  const [consultOpen, setConsultOpen] = useState(false);
  const result = getDiagnosis(selectedSymptoms);

  return (
    <div className="bg-white/90 shadow-card rounded-3xl max-w-xl mx-auto overflow-hidden min-w-[320px]">
      <div className="bg-blue-700 text-white px-8 py-6 text-center">
        <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
          <span role="img" aria-label="check">✅</span> Prediction Results
        </h2>
      </div>
      <div className="px-8 py-8">
        <div className="mb-4 bg-green-50 border-l-4 border-green-400 text-green-900 p-4 rounded-lg text-center">
          <strong className="mr-2">🦠 Predicted Condition:</strong>
          <span className="text-lg font-bold">{result.disease}</span>
        </div>
        <div className="mb-5">
          <h5 className="font-semibold mb-2">🩺 Symptoms Analyzed:</h5>
          <ul className="list-disc ml-6 text-gray-700">
            {selectedSymptoms.map(s =>
              <li key={s}>{s.replace(/_/g, " ").replace(/^\w/, c => c.toUpperCase())}</li>
            )}
          </ul>
        </div>
        <div className="mb-5">
          <h5 className="font-semibold mb-2">📋 Description:</h5>
          <p className="text-gray-700">{result.description}</p>
        </div>
        <div className="mb-5">
          <h5 className="font-semibold mb-2">💊 Recommended Care:</h5>
          <p className="text-gray-700">{result.medications}</p>
        </div>
        <div className="mb-5">
          <Button variant="outline" className="rounded-full border-blue-700 text-blue-700 font-semibold" onClick={() => setConsultOpen(true)}>
            👨‍⚕️ Request Doctor Consultation
          </Button>
        </div>
        <div className="text-center mt-7">
          <Button variant="outline" className="rounded-full border-blue-700 text-blue-700 font-semibold" onClick={onBack}>
            Check Other Symptoms
          </Button>
        </div>
      </div>
      <ConsultationDialog open={consultOpen} setOpen={setConsultOpen} />
    </div>
  );
}
