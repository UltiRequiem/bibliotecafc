// This file simulates API calls to fetch data
// In a real application, this would connect to your backend or database

import { courses } from "./courses"

export async function getCourses(facultyId: string, semesterId: string) {
  return courses.filter((course) => course.facultyId === facultyId && course.semesterId === semesterId)
}

export async function getCourseDetails(facultyId: string, semesterId: string, courseId: string) {
  return courses.find(
    (course) => course.facultyId === facultyId && course.semesterId === semesterId && course.id === courseId,
  )
}

