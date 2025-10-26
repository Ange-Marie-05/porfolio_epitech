"use client";
import { useState } from "react";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      title: "A propos",
      key: "about",
      links: [{ label: "Qui suis-je", href: "#qui" }],
    },
    {
      title: "Projets",
      key: "projects",
      links: [
        { label: "Web & Mobile", href: "#web-mobile" },
        { label: "UX/UI Design", href: "#design" },
      ],
    },
    {
      title: "Contact",
      key: "contact",
      links: [
        { label: "LinkedIn", href: "#linkedin" },
        { label: "GitHub", href: "#github" },
        { label: "Me joindre", href: "#contact" },
        { label: "Télécharger CV", href: "#contact" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile header */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-white/50 text-white flex items-center justify-between p-4 z-50 backdrop-blur-xl">
        <h1 className="font-bold text-lg">AM Portfolio</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <img src="/close.svg" className="w-6 h-6" /> : <img src="/menu.svg" className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full h-screen bg-gray-900 text-white flex flex-col py-8 px-6 gap-4 overflow-y-auto z-40">
          {menuItems.map((item) => (
            <div key={item.key}>
              <button
                onClick={() => toggleSubMenu(item.key)}
                className="w-full flex justify-between items-center font-semibold"
              >
                {item.title}
                <span className={`transition-transform duration-300 ${openSubMenu === item.key ? "rotate-90" : ""}`}>▶</span>
              </button>

              <ul
                className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                  openSubMenu === item.key ? "max-h-80" : "max-h-0"
                }`}
              >
                {item.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setMenuOpen(false)} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 w-[220px] lg:w-[260px] xl:w-[300px] h-screen  text-white flex-col py-12 px-6">
        <h1 className="text-cyan-400 text-2xl font-bold mb-8">Ange-Marie Portfolio</h1>
        {menuItems.map((item) => (
          <div key={item.key} className="mb-8">
            <span className="font-semibold mb-2">{item.title}</span>
            <ul className="ml-4 space-y-2">
              {item.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-block hover:text-cyan-400 hover:underline underline-offset-4 decoration-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
}