import CustomInput from "./CustomInput";
import "../styles/PersonalDetails.css";
import { useState } from "react";

function PersonalDetails() {
    const [isExpanded, setIsExpanded] = useState(true); // Track if the component is expanded

    const toggleCollapse = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className="personal-details">
            <h1 onClick={toggleCollapse}>
                {isExpanded ? "▼ Personal Details" : "▶ Personal Details"}
                </h1>
            {isExpanded && (
                <div>
                    <CustomInput placeholder="John Doe" type="text" labelText="Full Name" optional={false}/>
                    <CustomInput placeholder="john@email.com" type="text" labelText="Email" optional={true}/>
                    <CustomInput placeholder="+66 1234 123" type="text" labelText="Phone Number" optional={true}/>
                    <CustomInput placeholder="Berlin, DE" type="text" labelText="Address" optional={true}/>
                </div>
            )}
            
        </div>
    );
}

export default PersonalDetails;