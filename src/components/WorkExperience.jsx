import { useState } from "react";
import CollapsibleComponent from "./CollapsibleComponent";
import CustomInput from "./CustomInput";
import "../styles/Education.css";
import { mdiBriefcase } from "@mdi/js";

function WorkExperience({experienceList, setExperienceList}) {

    const [experience, setExperience] = useState({
        position: "",
        workplace: "",
        startingYear: null,
        endYear: null,
        jobResponsabilities: "",
    });

    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setExperience((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addExperience = () => {
        if (editIndex !== null) {
            const updatedList = [...experienceList];
            updatedList[editIndex] = {...experience};
            setExperienceList(updatedList);
            setEditIndex(null);
        } else {
            const newExperience = { ...experience }; 

            if (newExperience.endYear === "") {
                newExperience.endYear = "present";
            }

            setExperienceList([...experienceList, newExperience]);
        }
        
        setExperience({ position: "", workplace: "", startingYear: "", endYear: "", jobResponsabilities: "" });
    };

    const removeWorkExperience = (index) => {
        setExperienceList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const editWorkExperience = (index) => {
        const experienceToEdit = experienceList[index];
        setExperience(experienceToEdit);
        setEditIndex(index);
    }

    return (
        <CollapsibleComponent title="Work Experience" icon={mdiBriefcase}>
            <CustomInput 
                placeholder="Web Developer" 
                type="text" 
                labelText="Position" 
                optional={false}
                name="position"
                value={experience.position}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="Company Inc." 
                type="email" 
                labelText="Workplace" 
                optional={false}
                name="workplace"
                value={experience.workplace}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="11/2022" 
                type="date" 
                labelText="Starting Year" 
                optional={false}
                name="startingYear"
                value={experience.startingYear}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="3/2023" 
                type="date" 
                labelText="End Year" 
                optional={true}
                name="endYear"
                value={experience.endYear}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="TODO" 
                type="text" 
                labelText="Job Responsabilites" 
                optional={true}
                name="jobResponsabilities"
                value={experience.jobResponsabilities}
                onChange={handleInputChange}
            />

            <div className="submit-button">
                <button onClick={addExperience}>
                    {editIndex !== null ? "Update" : "Submit"}
                </button>
            </div>

            <div className="education-list">
                <ul>
                    {experienceList.map((exp, index) => (
                    <li key={index} className="education-item">
                        <div>                                                                    
                            <div>{exp.workplace}</div>
                            <div>{exp.position}</div>
                        </div>

                        <div className="education-buttons">
                            <button onClick={() => editWorkExperience(index)} className="edit-button">Edit</button>
                            <button onClick={() => removeWorkExperience(index)} className="remove-button" disabled={editIndex !== null}>Remove</button>
                        </div>                        
                    </li>
                    ))}
                </ul>
            </div>

        </CollapsibleComponent>
    );
}

export default WorkExperience;