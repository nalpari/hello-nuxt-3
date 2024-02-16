import coursesData from './coursesData';
import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CourseReturn => {
  const courses = coursesData.map((course) => {
    return {
      ...course,
      rating: course.rating.toFixed(1),
      reviewsCount: course.reviewsCount.toLocaleString(),
      studentCount: course.studentCount.toLocaleString(),
      path: `/course/${course.courseSlug}`,
    };
  });

  return {
    courses,
  };
};
