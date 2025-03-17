import CollapsibleComponent from "./CollapsibleComponent";
import { mdiFire } from '@mdi/js';
import CustomInput from "./CustomInput";
import { useState } from "react";
import "../styles/Education.css";

function Skills({skillList, setSkillList}) {

    const [skill, setSkill] = useState("");

    const addSkill = () => {
        if (skill.trim() !== "") {
            setSkillList([...skillList, skill]);
            setSkill("");
        }
    };

    const removeSkill = (index) => {
        setSkillList((prevList) => prevList.filter((_, i) => i !== index));
    };

    return (
        <CollapsibleComponent title="Skills" icon={mdiFire}>
            <CustomInput 
                placeholder="e.g., Communication"
                type="text" 
                labelText="Skills"
                optional={true}
                name="skill"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
            />

            <div onClick={addSkill} className="add-button">
                <button>Add Skill +</button>
            </div>

            <ul className="responsibilities-list">
                {skillList.map((skill, index) => (
                    <li key={index} className="responsibility-item">
                        {skill}
                        <button onClick={() => removeSkill(index)} className="remove-responsibility-button">
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </CollapsibleComponent>
    );
}

export default Skills;