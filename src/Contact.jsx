import './Styles.css';
const Contact = (formData, setFormData ) => {
    return (
        <div className="form">
            <h2>Contact Details</h2>
            <label>Address</label>
            <input
                type="text"
                value={formData.addr}
                onChange={(e) => setFormData({...formData, addr: e.target.value})}
            />
            <label>City</label>
            <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
            <label>State</label>
            <input
                type="text"
                value={formData.stat}
                onChange={(e) => setFormData({...formData, stat: e.target.value})}
            />
        </div>
    )
}
export default Contact
