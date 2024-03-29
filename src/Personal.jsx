import './Styles.css'
const Personal = ( formData, setFormData ) => {
    return (
        <div className="form">
            <h2>Personal Details</h2>
            <label>Name</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <label>Mobile</label>
            <input
                type="text"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            />
            <label>Email</label>
            <input
                type="email"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
        </div>
    )
}
export default Personal
