import PropTypes from 'prop-types';

const SelectedCourse = ({ selectedCourse, idx }) => {
    return (
        <div>
            <p className='font-semibold mb-2'>{idx + 1} {selectedCourse.title}</p>
        </div>
    );
};

SelectedCourse.propTypes = {
    selectedCourse: PropTypes.object,
    idx: PropTypes.number
}

export default SelectedCourse;