import Link from "next/link"
import { Folder, ArrowLeft } from "lucide-react"
import { faculties } from "@/lib/data"

export default function FacultyPage({ params }: { params: { facultyId: string } }) {
  const faculty = faculties.find((f) => f.id === params.facultyId)

  if (!faculty) {
    return <div>Facultad no encontrada</div>
  }

  // Generate semesters 1-10
  const semesters = Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `${i + 1}${getOrdinalSuffix(i + 1)} Semestre`,
  }))

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-2 text-orange-400 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Volver a Facultades
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-16">{faculty.name.toUpperCase()}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {semesters.map((semester) => (
            <Link
              key={semester.id}
              href={`/faculty/${faculty.id}/semester/${semester.id}`}
              className="flex flex-col items-center group"
            >
              <div className="w-28 h-28 rounded-full bg-orange-400 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <Folder className="h-14 w-14 text-white" />
              </div>
              <span className="text-center font-medium">{semester.id}° CICLO</span>
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

function getOrdinalSuffix(num: number): string {
  if (num === 1) return "er"
  return "do"
}

