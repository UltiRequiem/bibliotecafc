import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { faculties } from "@/lib/data"
import { getCourses } from "@/lib/api"

export default async function SemesterPage({
  params,
}: {
  params: { facultyId: string; semesterId: string }
}) {
  const faculty = faculties.find((f) => f.id === params.facultyId)

  if (!faculty) {
    return <div>Facultad no encontrada</div>
  }

  // Fetch courses for this faculty and semester
  const courses = await getCourses(params.facultyId, params.semesterId)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto">
          <Link
            href={`/faculty/${params.facultyId}`}
            className="flex items-center gap-2 text-orange-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a {faculty.name}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-6">{faculty.name}</h2>
        <h3 className="text-2xl font-semibold text-center mb-16">{params.semesterId}° Semestre</h3>

        <div className="max-w-4xl mx-auto">
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/faculty/${params.facultyId}/semester/${params.semesterId}/course/${course.id}`}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-4"
                >
                  <FileText className="h-10 w-10 text-orange-400" />
                  <div>
                    <h4 className="font-medium text-lg">{course.name}</h4>
                    <p className="text-gray-400">{course.code}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <p>No hay cursos disponibles para este semestre.</p>
            </div>
          )}
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

