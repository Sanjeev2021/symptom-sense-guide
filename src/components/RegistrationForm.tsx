
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface RegistrationFormProps {
  onToThankYou: (name: string) => void;
}

export default function RegistrationForm({ onToThankYou }: RegistrationFormProps) {
  const [inputs, setInputs] = useState({ name: "", email: "", phone: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let errs: { [key: string]: string } = {};
    if (!inputs.name || inputs.name.length < 3)
      errs.name = "Please enter a valid name (at least 3 characters)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email))
      errs.email = "Please enter a valid email address";
    if (!/^[6-9]\d{9}$/.test(inputs.phone))
      errs.phone = "Please enter a valid 10-digit phone number starting with 6-9";
    if (!inputs.password || inputs.password.length < 8)
      errs.password = "Password must be at least 8 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast({ title: "Success!", description: "Registration complete 🎉" });
      setTimeout(() => onToThankYou(inputs.name), 400);
    } else {
      toast({ title: "Check your input", description: "Please fix the errors in the form" });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
      <h4 className="text-xl text-center mb-3">🔐 Create Your Account</h4>
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input name="name" type="text" value={inputs.name} onChange={handleChange}
               className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300`} placeholder="Enter your full name" />
        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
      </div>
      <div>
        <label className="block font-medium mb-1">Email Address</label>
        <input name="email" type="email" value={inputs.email} onChange={handleChange}
               className={`w-full border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300`} placeholder="you@example.com" />
        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
      </div>
      <div>
        <label className="block font-medium mb-1">Phone Number</label>
        <input name="phone" type="tel" value={inputs.phone} onChange={handleChange}
               className={`w-full border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300`} placeholder="10-digit mobile number" />
        {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
      </div>
      <div>
        <label className="block font-medium mb-1">Password</label>
        <input name="password" type="password" value={inputs.password} onChange={handleChange}
               className={`w-full border ${errors.password ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300`} placeholder="Choose a strong password" />
        {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
      </div>
      <div className="text-center mt-4">
        <Button type="submit" className="w-full rounded-full bg-blue-600 hover:bg-blue-800 font-bold py-2 transition-all">
          Register Now
        </Button>
      </div>
    </form>
  );
}
