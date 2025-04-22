
export default function About() {
  return (
    <section className="container max-w-2xl mx-auto py-16 animate-fade-in">
      <div className="glass p-10 rounded-3xl shadow-card text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          <span role="img" aria-label="information">ℹ️</span> About Us
        </h2>
        <p className="text-gray-700 text-lg">
          The Personalized Health Assistant is designed to empower you with professional, AI-powered healthcare guidance anytime, anywhere.
          <br /><br />
          We combine advanced technology with compassionate care to support your well-being and connect you to expert medical advice, securely and conveniently.
        </p>
      </div>
    </section>
  );
}
