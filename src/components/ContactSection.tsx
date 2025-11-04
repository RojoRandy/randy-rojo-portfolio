import { LinkedinIcon, MailIcon, MapPin, PhoneIcon, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { toast, type ToastContentProps } from "react-toastify";
import { useState } from "react";

export default function ContactSection() {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true)
    toast(WithAvatar, {
      data: {
        title: "titulo"
      },
      closeButton: true,
      autoClose: 2000,
      progress: 0.7,
      className:
        'border shadow-lg overflow-visible scale-100 ring-1 ring-black/5 rounded-xl flex items-center gap-6 !bg-background highlight-white/5',
    });

    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Trabajemos
          <span className="text-primary"> Juntos</span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          ¿Deseas conocerme un poco más?
          Sientete libre de contactarme, estoy abierto a platicar nuevas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="w-full">
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:rojo.q.randy@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    rojo.q.randy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="w-full">
                  <h4 className="font-medium">Teléfono</h4>
                  <a 
                    href="tel:+526182242231"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +52 (618) 224-2331
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="w-full">
                  <h4 className="font-medium">Ubicación</h4>
                  <a 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Durango, México
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Buscame en</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/rojo-randy/"
                  target="_blank"
                  className="text-foreground hover:text-blue-600 transition-colors"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Enviame un mensaje</h3>

            <form 
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-6"
            >
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                > Tu nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Ej. Randy Rojo..."
                />
              </div>
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                > Tu correo</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your_email@gmail.com"
                />
              </div>
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                > Tu mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Ingresa tu mensaje aqui..."
                />
              </div>

              <button 
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 disabled:bg-primary/20 disabled:cursor-not-allowed"
                )}
                // disabled={isSubmitting}
                disabled
              >
                { isSubmitting ? "Enviando..." : "Enviar Mensaje" }
                
                <Send size={26} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


type CustomNotificationProps = ToastContentProps<{
  title: string;
}>;


function WithAvatar({
  data,
}: CustomNotificationProps) {
  return (
    <div className="flex flex-col pl-8">
      <div className="grid z-10 place-items-center absolute -left-12 top-1/2 -translate-y-1/2 size-20 rounded-full shadow-lg bg-linear-to-r from-red-900 to-primary text-white uppercase">
        { data.title ? data.title[0] : ''}
      </div>
      <p className="text-white font-semibold">{data.title}</p>
      <p className="text-sm text-zinc-400">Your message has been sent.</p>
    </div>
  );
}