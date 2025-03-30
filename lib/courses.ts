// This file contains sample course data
// In a real application, this would be stored in a database

export const courses = [
  {
    id: "cs101",
    facultyId: "computer-science",
    semesterId: "1",
    name: "Introducción a la Programación",
    code: "CS101",
    exams: [
      {
        id: "exam1",
        title: "Examen Parcial 2023",
        date: "2023-04-15",
        fileUrl: "/files/cs101-midterm.pdf",
      },
      {
        id: "exam2",
        title: "Examen Final 2023",
        date: "2023-06-30",
        fileUrl: "/files/cs101-final.pdf",
      },
    ],
    materials: [
      {
        id: "mat1",
        title: "Guía de Laboratorio 1",
        type: "PDF",
        fileUrl: "/files/cs101-lab1.pdf",
      },
      {
        id: "mat2",
        title: "Ejemplos de Código",
        type: "ZIP",
        fileUrl: "/files/cs101-code.zip",
      },
    ],
    videos: [
      {
        id: "vid1",
        title: "Introducción a Variables y Tipos de Datos",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    id: "cs102",
    facultyId: "computer-science",
    semesterId: "1",
    name: "Matemáticas Discretas",
    code: "CS102",
    exams: [
      {
        id: "exam1",
        title: "Examen Parcial 2023",
        date: "2023-04-18",
        fileUrl: "/files/cs102-midterm.pdf",
      },
    ],
    materials: [
      {
        id: "mat1",
        title: "Apuntes de Clase",
        type: "PDF",
        fileUrl: "/files/cs102-notes.pdf",
      },
    ],
    videos: [],
  },
  {
    id: "math101",
    facultyId: "mathematics",
    semesterId: "1",
    name: "Cálculo I",
    code: "MATH101",
    exams: [
      {
        id: "exam1",
        title: "Examen Parcial 2023",
        date: "2023-04-10",
        fileUrl: "/files/math101-midterm.pdf",
      },
    ],
    materials: [
      {
        id: "mat1",
        title: "Formulario",
        type: "PDF",
        fileUrl: "/files/math101-formulas.pdf",
      },
    ],
    videos: [],
  },
  {
    id: "cs201",
    facultyId: "computer-science",
    semesterId: "2",
    name: "Estructuras de Datos",
    code: "CS201",
    exams: [
      {
        id: "exam1",
        title: "Examen Parcial 2023",
        date: "2023-04-20",
        fileUrl: "/files/cs201-midterm.pdf",
      },
    ],
    materials: [
      {
        id: "mat1",
        title: "Guía de Implementación",
        type: "PDF",
        fileUrl: "/files/cs201-guide.pdf",
      },
    ],
    videos: [],
  },
]

