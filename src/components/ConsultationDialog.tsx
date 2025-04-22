
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface ConsultationDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ConsultationDialog({ open, setOpen }: ConsultationDialogProps) {
  const [form, setForm] = useState({ date: "", time: "", type: "", notes: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast({ title: "Consultation Requested!", description: "A healthcare professional will contact you soon." });
      setForm({ date: "", time: "", type: "", notes: "" });
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>👨‍⚕️ Request Doctor Consultation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="font-medium mb-1">Preferred Date</label>
              <input name="date" type="date" value={form.date} onChange={handleChange}
                required className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div className="flex-1">
              <label className="font-medium mb-1">Preferred Time</label>
              <select name="time" value={form.time} onChange={handleChange}
                required className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option value="">Select time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (1PM - 5PM)</option>
                <option value="evening">Evening (6PM - 9PM)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="font-medium mb-1">Consultation Type</label>
            <select name="type" value={form.type} onChange={handleChange}
                    required className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="">Select type</option>
              <option value="video">Video Call</option>
              <option value="audio">Audio Call</option>
              <option value="chat">Text Chat</option>
              <option value="inperson">In-Person Visit</option>
            </select>
          </div>
          <div>
            <label className="font-medium mb-1">Additional Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 min-h-[60px] focus:outline-none focus:ring-2 focus:ring-blue-300"
                      placeholder="Any specific concerns or questions for the doctor?" />
          </div>
          <Button type="submit" disabled={loading} className="rounded-full bg-blue-600 hover:bg-blue-800 font-bold py-2 mt-2">
            {loading ? "Requesting..." : "Request Consultation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
