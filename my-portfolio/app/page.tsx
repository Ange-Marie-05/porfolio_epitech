"use client";
import HeroContent from "@/components/ui/HeroContent";
import Projects from "@/components/ui/Projects";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xyznkvbn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <>
      <section id="qui" className="py-6 scroll-mt-5">
        <HeroContent />
      </section>

      {/*Divider*/}
      <div className="w-full h-0.5 bg-linear-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 my-5" />

      <Projects />

      {/*Divider*/}
      <div className="w-full h-0.5 bg-linear-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 my-5" />

      {/* Footer Contact */}
      <footer id="contact" className="relative bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Liens */}
            <motion.section initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Liens utiles</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/Ange-Marie-05"
                  target="_blank"
                  className="hover:text-cyan-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ange-marie-dovi-036a22386"
                  target="_blank"
                  className="hover:text-cyan-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a href="/CV_AMR.pdf" download className="hover:text-cyan-400 transition-colors">
                  Télécharger CV
                </a>
              </div>
            </motion.section>

            {/* Formulaire */}
            <motion.section initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Me contacter</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom et prénom"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-xl transition-colors"
                >
                  {formStatus === "sending" ? "Envoi..." : "Envoyer"}
                </button>

                {formStatus === "success" && <p className="text-green-400">✓ Message envoyé !</p>}
                {formStatus === "error" && <p className="text-red-400">✗ Erreur lors de l'envoi.</p>}
              </form>
            </motion.section>
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            © 2025 Ange-Marie Portfolio. Tous droits réservés.
          </div>
        </div>
      </footer>
    </>
  );
}
