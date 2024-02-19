import './Styles.css'
import SignUp from "./SignUp.jsx";
import {useState} from "react";

const MainForm = () => {

    const [step, setStep] = useState(0);

    return (
        <>
            <div>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <div className="container">
                    <div>
                        <SignUp/>
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={() => setStep(step -1)}>Prev</button>
                        <button className="btn" onClick={() => setStep(step + 1)}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainForm
