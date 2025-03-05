import { useState, useRef, useEffect } from "react";
import "../styles/CollapsibleComponent.css";

function CollapsibleComponent({title, children}) {
    const [isExpanded, setIsExpanded] = useState(true); // Track if the component is expanded
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsExpanded(prevState => !prevState);
    };

    // Update height dynamically when isExpanded changes
    useEffect(() => {
        if (contentRef.current) {
            setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isExpanded]);

    return (
        <div className="collapsible-component">
            <div onClick={toggleCollapse} className="collapsible-header">
                <h1>{title}</h1>
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
                {children}
            </div>
        </div>
    )
    
}

export default CollapsibleComponent;