
import { Button } from "@/components/ui/button";

interface ThankYouProps {
  name: string;
  onContinue: () => void;
}

export default function ThankYou({ name, onContinue }: ThankYouProps) {
  return (
    <div className="bg-white/95 shadow-card rounded-3xl max-w-xl mx-auto overflow-hidden text-center min-w-[320px]">
      <div className="bg-green-500 text-white px-8 py-6 rounded-t-3xl">
        <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
          <span role="img" aria-label="success">🎉</span> Success!
        </h2>
      </div>
      <div className="px-8 py-10 flex flex-col items-center">
        <span style={{ fontSize: "4.5rem", color: "#4caf50" }}>✓</span>
        <h3 className="mt-4 text-xl font-semibold">Thank you, <span className="text-blue-700">{name}</span>!</h3>
        <p className="text-gray-600 mt-2 mb-6">Your registration has been completed successfully.</p>
        <Button className="rounded-full bg-blue-600 hover:bg-blue-800 font-bold py-2 px-8 transition-all" onClick={onContinue}>
          Continue to Health Assistant
        </Button>
      </div>
    </div>
  )
}
