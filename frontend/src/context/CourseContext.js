import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CourseContext = createContext();
function CourseContextProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState(false);

  useEffect(function () {
    async function fetchCourses() {
      setIsLoadingCourses(true);
      try {
        const res = await axios.get('/api/courses');
        setCourses(res.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoadingCourses(false);
      }
    }
    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, isLoadingCourses }}>
      {children}
    </CourseContext.Provider>
  );
}

function useCourseContext() {
  const value = useContext(CourseContext);
  if (value === undefined)
    throw new Error('Used CourseContext outside of Provider.');
  return value;
}

export { useCourseContext, CourseContextProvider };
