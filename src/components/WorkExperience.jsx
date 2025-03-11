import { useState } from "react";
import CollapsibleComponent from "./CollapsibleComponent";
import CustomInput from "./CustomInput";

function WorkExperience({experienceList, setExperienceList}) {

    const [experience, setExperience] = useState({
        position: "",
        workplace: "",
        startingYear: "",
        endYear: "",
        jobResponsabilities: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setExperience((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addExperience = () => {
        const newExperience = { ...experience }; 

        if (newExperience.endYear === "") {
            newExperience.endYear = "present";
        }

        setExperienceList([...experienceList, newExperience]);
        setExperience({ position: "", workplace: "", startingYear: "", endYear: "", jobResponsabilities: "" });
    };

    return (
        <CollapsibleComponent title="Work Experience">
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
                type="text" 
                labelText="Starting Year" 
                optional={false}
                name="startingYear"
                value={experience.startingYear}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="3/2023" 
                type="text" 
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

            <button onClick={addExperience}>Submit</button>

        </CollapsibleComponent>
    );
}

export default WorkExperience;