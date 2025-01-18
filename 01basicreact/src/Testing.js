function Testing(props){
    const name = props.name;
    const course = props.course;
    const email = props.email;
    const dob = props.dob;
    const mobile = props.mobile;
    return(
        <div>
            <h2>My name is {name}</h2>
            <p>I am enrolled in {course}</p>
            <p>My email id is {email}</p>
            <p>My date of birth is {dob}</p>
            <p>Contact No. {mobile}</p>
        </div>
        

    )
}
export default Testing;