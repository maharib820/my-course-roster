import SelectedCourse from "../SelectedCourse/SelectedCourse";
import PropTypes from 'prop-types';


const CourseSelectedInfo = ({selectedCourses, remCredit, currentCredit, price}) => {
    return (
        <div className="w-full xl:w-1/5">
            <div className=" bg-white rounded-xl px-6 pt-6">
                <div><h2 className="text-[#2F80ED] text-xl font-bold pb-4 border-b-2">Credit Hour Remaining {remCredit} hr</h2></div>
                <div className="pb-1 border-b-2 mb-4">
                    <h2 className="pt-4 text-xl font-bold pb-4">Course Name</h2>
                    {
                        selectedCourses.map((selectedCourse, idx) => <SelectedCourse key={idx} selectedCourse={selectedCourse} idx={idx}></SelectedCourse>)
                    }
                </div>
                <div className="border-b-2 mb-4"><h4 className="text-xl font-bold pb-5">Total Credit Hour : {currentCredit}</h4></div>
                <div><h4 className="text-xl font-bold pb-5">Total Price : {price} USD</h4></div>
            </div>
        </div>
    );
};

CourseSelectedInfo.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    remCredit: PropTypes.number,
    currentCredit: PropTypes.number,
    price: PropTypes.number
}

export default CourseSelectedInfo;