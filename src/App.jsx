import { useState } from 'react'
import './App.css'
import CourseSelectedInfo from './components/CourseSelectedInfo/CourseSelectedInfo'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remCredit, setRemCredit] = useState(20);
  const [currentCredit, setCurrentCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const selectedCoursesHandler = (selectedCourse) => {
    const isExist = selectedCourses.find(item => item.id == selectedCourse.id);
    let count = selectedCourse.credit;
    let cost = selectedCourse.price;
    if (isExist) {
      alert('Course already added !')
    }
    else {
      selectedCourses.forEach(item => count = count + item.credit);
      selectedCourses.forEach(itemm => cost = cost + itemm.price);
      const remainingCredit = 20 - count;
      if (remainingCredit < 0 || count > 20) {
        alert('Remaining credit exist and max credit reached');
      }
      else {
        setRemCredit(remainingCredit);
        setCurrentCredit(count);
        setPrice(cost);
        const newSelectedCourse = [...selectedCourses, selectedCourse];
        setSelectedCourses(newSelectedCourse);
      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex flex-col lg:flex-row justify-between pb-24 px-2 lg:px-16 gap-6'>
        <Courses selectedCoursesHandler={selectedCoursesHandler}></Courses>
        <CourseSelectedInfo selectedCourses={selectedCourses} remCredit={remCredit} currentCredit={currentCredit} price={price}></CourseSelectedInfo>
      </div>
    </>
  )
}

export default App