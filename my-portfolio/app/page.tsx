import HeroContent from "@/components/ui/HeroContent";
import Projects from "@/components/ui/Projects"; // <-- importe ton composant Projects

export default function Home() {
  return (
    <>
      {/* Hero / Qui suis-je */}
      <section id="qui" className="py-12 scroll-mt-20">
        <HeroContent />
      </section>

      {/* Projets */}
      <section id="projects">
        <Projects />
      </section>

      {/* Section Contact */}
      <section id="contact" className="bg-[#111] text-[#ededed] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
            <a href="https://linkedin.com/in/tonprofil" className="hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/tonprofil" className="hover:underline">
              Github
            </a>
            <a href="#join" className="hover:underline">
              Me joindre
            </a>
            <a href="/CV.pdf" target="_blank" className="hover:underline">
              Télécharger CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
