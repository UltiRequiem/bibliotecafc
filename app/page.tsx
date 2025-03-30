import Link from "next/link"
import { BookOpen } from "lucide-react"
import { faculties } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-orange-400" />
            <h1 className="text-xl font-bold">Facultad de Ciencias</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              Inicio
            </Link>
            <Link href="/libros" className="hover:text-orange-400 transition-colors">
              Libros
            </Link>
            <Link href="/biblioteca" className="hover:text-orange-400 transition-colors">
              Biblioteca
            </Link>
            <Link href="/grupos" className="hover:text-orange-400 transition-colors">
              Grupos Estudiantiles
            </Link>
            <Link href="/investigacion" className="hover:text-orange-400 transition-colors">
              Investigación
            </Link>
            <Link href="/ingresantes" className="hover:text-orange-400 transition-colors">
              Para Ingresantes
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-16">BIBLIOTECA DE FACULTADES</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {faculties.map((faculty) => (
            <Link key={faculty.id} href={`/faculty/${faculty.id}`} className="flex flex-col items-center group">
              <div className="w-32 h-32 rounded-full bg-orange-400 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <faculty.icon className="h-16 w-16 text-white" />
              </div>
              <span className="text-center font-medium">{faculty.name}</span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 p-4 mt-auto">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Universidad - Biblioteca de Facultades</p>
        </div>
      </footer>
    </div>
  )
}

