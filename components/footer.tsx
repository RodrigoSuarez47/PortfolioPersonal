import { MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 lg:px-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© {currentYear} Rodrigo Suarez. Todos los derechos reservados.</div>
          <div className="text-sm text-muted-foreground flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">Montevideo, Uruguay</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
