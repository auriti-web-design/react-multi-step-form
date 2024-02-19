import './Styles.css'
import Personal from "./Personal.jsx";
import Contact from "./Contact.jsx";
import SignUp from "./SignUp.jsx";
import {useState} from "react";

const MainForm = () => {

    const [step, setStep] = useState(0);

    const ShowStep = () => {
        if(step === 0) {
            return(
                <SignUp />
            );
        }
        else if(step === 1) {
            return(
                <Personal />
            );
        }

        else if(step === 2) {
            return (
                <Contact />
            );
        }
    }

    return (
        <>
            <div>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
                <div className="container">
                    <div>
                        { ShowStep() }
                    </div>
                    <div className="btn-container">
                        <button className="btn" disabled={ step == 0} onClick={() => setStep(step -1)}>Prev</button>
                        <button className="btn" disabled={ step == 2} onClick={() => setStep(step + 1)}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainForm
