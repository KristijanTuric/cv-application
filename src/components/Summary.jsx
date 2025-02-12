import CustomInput from "./CustomInput";
import "../styles/Summary.css";
import { useState, useRef, useEffect } from "react";

function Summary() {
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
        <div className="summary-container">
            <div onClick={toggleCollapse} className="summary-header">
                <h1>
                    Summary
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
                <CustomInput placeholder="Short info about you..." type="textarea" labelText="" optional={true}/>
            </div>
        </div>
    );
}

export default Summary;