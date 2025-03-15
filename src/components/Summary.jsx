import CustomInput from "./CustomInput";
import "../styles/Summary.css";
import CollapsibleComponent from "./CollapsibleComponent";
import { mdiTypewriter } from "@mdi/js";

function Summary({summary, setSummary}) {
    return (
        <CollapsibleComponent title="Summary" icon={mdiTypewriter}>
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