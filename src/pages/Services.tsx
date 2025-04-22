
export default function Services() {
  return (
    <section className="container max-w-2xl mx-auto py-16 animate-fade-in">
      <div className="glass p-10 rounded-3xl shadow-card text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          <span role="img" aria-label="sparkles">✨</span> Our Services
        </h2>
        <ul className="list-none space-y-5 text-gray-700 text-lg">
          <li><span className="font-semibold text-blue-600">Symptom Checker:</span> Assess your health with instant feedback.</li>
          <li><span className="font-semibold text-blue-600">Virtual Consultations:</span> Connect with doctors anytime, anywhere.</li>
          <li><span className="font-semibold text-blue-600">Personalized Plans:</span> Get tailored diet and wellness recommendations.</li>
          <li><span className="font-semibold text-blue-600">Medical Records:</span> Securely manage your health documents.</li>
        </ul>
      </div>
    </section>
  );
}
