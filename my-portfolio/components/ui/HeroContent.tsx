import ReactPlayer from "react-player";

export default function HeroContent() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full bg-black text-white px-6 md:px-16 py-16 gap-12">
      {/*Vidéo carrée*/}
      <div className="w-full md:w-1/2 max-w-xl mx-auto aspect-square rounded-3xl overflow-hidden shadow-lg">
        <ReactPlayer
          src="/videos/hero_content.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="object-cover"
        />
      </div>

      {/*Texte*/}
      <div className="flex flex-col justify-center w-full md:w-1/2 max-w-lg text-center md:text-left">
        <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          WHO AM <span className="text-cyan-400">I</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300">
          Curieux du numérique, entre design et code. J’aime façonner des interfaces simples, belles, et un peu vivantes.
        </p>
        <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
          Actuellement à Epitech Rennes. Demain ? Peut-être l’IA ou l’analyse de données qui font parler le monde.
        </p>
        <a
          href="#web-mobile"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold text-base hover:bg-cyan-500 transition-colors duration-300"
        >
          Explorer mon univers
        </a>
      </div>
    </section>
  );
}