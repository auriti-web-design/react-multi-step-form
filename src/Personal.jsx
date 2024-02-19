import './Styles.css'
const Personal = () => {
    return (
        <div className="form">
            <h2>Personal Details</h2>
            <label>Name</label>
            <input type="text"/>
            <label>Mobile</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email"/>
        </div>
    )
}
export default Personal
