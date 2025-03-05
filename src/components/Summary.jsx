import CustomInput from "./CustomInput";
import "../styles/Summary.css";
import CollapsibleComponent from "./CollapsibleComponent";

function Summary({summary, setSummary}) {
    return (
        <CollapsibleComponent title="Summary">
            <CustomInput 
                placeholder="Short info about you..." 
                type="textarea" 
                labelText="" 
                optional={true} 
                value={summary || ""} 
                onChange={(e) => setSummary(e.target.value)}/>
        </CollapsibleComponent>
    );
}

export default Summary;