import CustomInput from "./CustomInput";
import "../styles/PersonalDetails.css";
import { useState, useRef, useEffect } from "react";

function PersonalDetails() {
    const [isExpanded, setIsExpanded] = useState(true); // Track if the component is expanded
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsExpanded(prevState => !prevState);
    };

    // Update height dynamically when isExpanded changes
    useEffect(() => {
        if (isExpanded) {
            setHeight(`${contentRef.current.scrollHeight}px`); // Get actual height of content
        } else {
            setHeight("0px");
        }
    }, [isExpanded]);

    return (
        <div className="personal-details">
            <div onClick={toggleCollapse} className="personal-details-header">
                <h1>
                    Personal Details                    
                </h1>
                <span style={{fontSize: "12px"}}>
                        {isExpanded ? "▼" : "▶"}
                </span>
            </div>
           
            <div 
                ref={contentRef} 
                className="collapsible-content"
                style={{ 
                    maxHeight: height, 
                    overflow: "hidden", 
                    transition: "max-height 0.4s ease-in-out" 
                }}
            >
                <CustomInput placeholder="John Doe" type="text" labelText="Full Name" optional={false}/>
                <CustomInput placeholder="john@email.com" type="email" labelText="Email" optional={true}/>
                <CustomInput placeholder="+66 1234 123" type="text" labelText="Phone Number" optional={true}/>
                <CustomInput placeholder="Berlin, DE" type="text" labelText="Address" optional={true}/>
            </div>
            
        </div>
    );
}

export default PersonalDetails;