import CollapsibleComponent from "./CollapsibleComponent";
import CustomInput from "./CustomInput";
import { useState } from 'react';

function Education({educationList, setEducationList}) {

    const [education, setEducation] = useState({
        institution: "",
        degree: "",
        startingYear: "",
        graduatingYear: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEducation((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addEducation = () => {
        const newEducation = { ...education }; 

        if (newEducation.graduatingYear === "") {
            newEducation.graduatingYear = "present";
        }

        setEducationList([...educationList, newEducation]);
        setEducation({ institution: "", degree: "", startingYear: "", graduatingYear: "" });
    };

    return (
        <CollapsibleComponent title="Education">
            <CustomInput 
                placeholder="University of Berlin" 
                type="text" 
                labelText="Institution" 
                optional={false} 
                name="institution"
                value={education.institution}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="Ph.D in Philosophy" 
                type="text" 
                labelText="Degree" 
                optional={false}
                name="degree"
                value={education.degree}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="10/2020" 
                type="text" 
                labelText="Starting Year" 
                optional={false}
                name="startingYear"
                value={education.startingYear}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="6/2023" 
                type="text" 
                labelText="Graduating Year" 
                optional={true}
                name="graduatingYear"
                value={education.graduatingYear}
                onChange={handleInputChange}
            />

            <button onClick={addEducation}>Submit</button>
        </CollapsibleComponent>
    )
}

export default Education;