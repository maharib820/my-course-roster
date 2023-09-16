import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = () => {
    // managing state for fake api data
    const [coursesData, setCoursesData] = useState([]);

    useEffect(() => {
        fetch('allcourses.json')
            .then(res => res.json())
            .then(data => setCoursesData(data));
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-4/5">
            {
                coursesData.map((courseData, idx) => <Course key={idx} courseData={courseData}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    selectedCoursesHandler: PropTypes.func,
}

export default Courses;