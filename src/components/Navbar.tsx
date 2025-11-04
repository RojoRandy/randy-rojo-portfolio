import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { MenuIcon, X } from "lucide-react"

const navItems = [
  { id: 'hero', name: 'Inicio', href: "#hero" },
  { id: 'about', name: 'Sobre mi', href: "#about" },
  { id: 'skills', name: 'Habilidades', href: "#skills" },
  { id: 'career', name: 'Carrera', href: "#career" },
  { id: 'projects', name: 'Proyectos', href: "#projects" },
  { id: 'contact', name: 'Contacto', href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  const onClickSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = e?.target as HTMLAnchorElement;
    const id = target.getAttribute('href')?.replace('#','')
    const element = document.getElementById(String(id));
    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav 
    className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            {" "}
            <span className="text-glow text-foreground"> {`<`}Randy</span> Rojo{` />`}
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a 
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={onClickSection}
            >{item.name}
            </a>
          ))}
        </div>
        
        {/* mobile nav */}
        <button
          onClick={()=> setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        > 
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" 
          )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a 
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={(e)=>{
                  onClickSection(e)
                  setIsMenuOpen(false)
                }}
              >{item.name}
              </a>
            ))}
          </div>

        </div>
      </div>

    </nav>
  )
}
