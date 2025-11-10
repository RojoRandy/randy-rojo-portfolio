import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { LanguagesIcon, MenuIcon, X } from "lucide-react"
import { useTranslation } from "react-i18next"

const navItems = [
  { id: 'hero', name: 'home.navbar.home', href: "#hero" },
  { id: 'about', name: 'home.navbar.about', href: "#about" },
  { id: 'skills', name: 'home.navbar.skills', href: "#skills" },
  { id: 'career', name: 'home.navbar.career', href: "#career" },
  { id: 'contact', name: 'home.navbar.contact', href: "#contact" },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
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

  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang',newLang)
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

        <button
          className="flex gap-4 text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
          onClick={handleLanguageToggle}
        >
          <LanguagesIcon size={24}  />
          <span className="text-s">
            {t(i18n.language === 'en' ? 'home.navbar.langEs' : 'home.navbar.langEn')}
          </span>
        </button>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a 
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={onClickSection}
            >
              {t(item.name)}
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
              >
                {t(item.name)}
              </a>
            ))}
          </div>

        </div>
      </div>

    </nav>
  )
}
