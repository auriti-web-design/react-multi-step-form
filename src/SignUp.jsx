import './Styles.css'
const SignUp = () => {
    return (
        <div className="form">
            <h2>Signup Details</h2>
            <label>Username</label>
            <input type="text"/>
            <label>Password</label>
            <input type="password"/>
            <label>Confirm Password</label>
            <input type="password"/>
        </div>
    )
}
export default SignUp
