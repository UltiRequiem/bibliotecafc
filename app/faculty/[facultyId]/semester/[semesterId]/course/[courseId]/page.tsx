import Link from "next/link"
import { ArrowLeft, FileText, Download, Book, Video } from "lucide-react"
import { faculties } from "@/lib/data"
import { getCourseDetails } from "@/lib/api"

export default async function CoursePage({
  params,
}: {
  params: { facultyId: string; semesterId: string; courseId: string }
}) {
  const faculty = faculties.find((f) => f.id === params.facultyId)

  if (!faculty) {
    return <div>Facultad no encontrada</div>
  }

  // Fetch course details
  const course = await getCourseDetails(params.facultyId, params.semesterId, params.courseId)

  if (!course) {
    return <div>Curso no encontrado</div>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto">
          <Link
            href={`/faculty/${params.facultyId}/semester/${params.semesterId}`}
            className="flex items-center gap-2 text-orange-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Semestre {params.semesterId}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">{course.name}</h2>
          <p className="text-gray-400 mb-8">
            {course.code} - {faculty.name}, Semestre {params.semesterId}
          </p>

          <div className="space-y-8">
            {/* Exams Section */}
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-400" />
                Exámenes
              </h3>

              {course.exams && course.exams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.exams.map((exam) => (
                    <div key={exam.id} className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{exam.title}</h4>
                          <p className="text-sm text-gray-400">{exam.date}</p>
                        </div>
                        <a
                          href={exam.fileUrl}
                          download
                          className="text-orange-400 hover:text-orange-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No hay exámenes disponibles.</p>
              )}
            </section>

            {/* Class Materials Section */}
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Book className="h-5 w-5 text-orange-400" />
                Materiales de Clase
              </h3>

              {course.materials && course.materials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.materials.map((material) => (
                    <div key={material.id} className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{material.title}</h4>
                          <p className="text-sm text-gray-400">{material.type}</p>
                        </div>
                        <a
                          href={material.fileUrl}
                          download
                          className="text-orange-400 hover:text-orange-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No hay materiales disponibles.</p>
              )}
            </section>

            {/* Videos Section */}
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Video className="h-5 w-5 text-orange-400" />
                Videos
              </h3>

              {course.videos && course.videos.length > 0 ? (
                <div className="space-y-4">
                  {course.videos.map((video) => (
                    <div key={video.id} className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">{video.title}</h4>
                      <div className="aspect-video">
                        <iframe
                          className="w-full h-full rounded"
                          src={video.embedUrl}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No hay videos disponibles.</p>
              )}
            </section>
          </div>
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

