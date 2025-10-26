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
      links: [{ label: "Qui suis je", href: "#qui" }],
    },
    {
      title: "Projets",
      key: "projects",
      links: [
        { label: "Web & Mobile", href: "#web&mobile" },
        { label: "Design", href: "#design" },
      ],
    },
    {
      title: "Contacts",
      key: "contacts",
      links: [
        { label: "LinkedIn", href: "#linkdln" },
        { label: "Github", href: "#github" },
        { label: "Me joindre", href: "#join" },
        { label: "Télécharger CV", href: "#cv" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile header */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-slate-600 text-background flex items-center justify-between p-4">
        <h1 className="font-sans text-base font-normal">AM Portfolio</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-background text-lg">
          {menuOpen ? <img src="close.svg" className="w-6 h-6" /> : <img src="menu.svg" className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden fixed top-10 left-0 w-full h-screen bg-slate-600 text-background flex flex-col py-8 px-4 space-y-3">
          {menuItems.map((item) => (
            <div key={item.key} className="w-full">
                <button
                onClick={() => toggleSubMenu(item.key)}
                className="w-full flex justify-between items-center font-semibold"
                >
                    {item.title}
                <span className={`transition-transform duration-300 ${openSubMenu === item.key ? "rotate-90" : ""}`}>▶</span>
                </button>

                <ul
                    className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
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
      <aside className="hidden md:flex fixed top-0 left-0 w-[200px] lg:w-[250px] xl:w-[300px] h-screen bg-foreground text-background flex-col py-8 px-4">
        <h1 className="text-cyan-500 text-2xl mb-8 font-bold">Ange-Marie Portfolio</h1>
        {menuItems.map((item) => (
          <div key={item.key} className="mb-8">
            <span className="font-semibold mb-1">{item.title}</span>
            <ul className="ml-4 space-y-1">
              {item.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:underline">
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
