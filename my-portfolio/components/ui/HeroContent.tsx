import ReactPlayer from "react-player";

export default function HeroContent() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full bg-black text-foreground px-6 md:px-16 py-12 gap-8">
      {/* Vidéo carrée */}
      <div className="w-full md:w-1/2 max-w-xl mx-auto aspect-square rounded-2xl overflow-hidden">
        <ReactPlayer
          src="videos/hero_content.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="object-cover"
        />
      </div>

      {/* Texte */}
      <div className="flex flex-col justify-center w-full md:w-1/2 max-w-lg text-center md:text-left">
        <h1 className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]">
          WHO AM <span className="text-[#00FFFF]">I</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-base lg:text-xl leading-relaxed">
          Un curieux du numérique, toujours entre design et code.  
          J’aime façonner des interfaces simples, belles, et un peu vivantes.
        </p>

        <p className="mt-4 text-xs sm:text-sm md:text-base text-[#b0b0b0] leading-relaxed">
          Aujourd’hui, j’explore la programmation et ses différentes branches à Epitech Rennes.  
          Demain ? Peut-être l’IA, ou les données qui font parler le monde.
        </p>

        <a
          href="#web&mobile"
          className="mt-8 inline-block px-5 py-2 sm:px-6 sm:py-3 rounded bg-[#00FFFF] text-[#233146] font-semibold text-sm sm:text-base transition-colors duration-300"
        >
          Explorer mon univers
        </a>
      </div>
    </section>
  );
}
