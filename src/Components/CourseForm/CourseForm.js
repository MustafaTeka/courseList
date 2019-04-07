import React from 'react';

const CourseForm = (props) => {
    return(
        <form onSubmit={props.addCouese}>
            <input type="text" placeholder="Add Course" onChange={props.updateCouese} value={props.current} />
            <button type="submit">Add Course</button>
        </form>
    )
}
export default CourseForm;