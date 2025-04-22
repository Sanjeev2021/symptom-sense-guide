
export default function Contact() {
  return (
    <section className="container max-w-2xl mx-auto py-16 animate-fade-in">
      <div className="glass p-10 rounded-3xl shadow-card text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          <span role="img" aria-label="mail">📬</span> Contact Us
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          We're here to help! For support, suggestions, or feedback, please email us at <a href="mailto:support@healthassistant.com" className="text-blue-600 underline">support@healthassistant.com</a>
        </p>
        <form className="space-y-4 max-w-lg mx-auto">
          <input className="w-full px-4 py-2 rounded border" type="text" placeholder="Your Name" required />
          <input className="w-full px-4 py-2 rounded border" type="email" placeholder="Your Email" required />
          <textarea className="w-full px-4 py-2 rounded border" placeholder="Message" rows={4} required />
          <button className="rounded-full bg-blue-600 hover:bg-blue-800 text-white font-semibold px-8 py-2 transition-all" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
