import CollapsibleComponent from "./CollapsibleComponent";
import CustomInput from "./CustomInput";
import { useState } from 'react';
import "../styles/Education.css";
import { mdiSchool } from "@mdi/js";

function Education({educationList, setEducationList}) {

    const [education, setEducation] = useState({
        institution: "",
        degree: "",
        startingYear: null,
        graduatingYear: null,
    });

    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEducation((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addEducation = () => {
        if (editIndex !== null) {
            const updatedList = [...educationList];
            updatedList[editIndex] = {...education};
            setEducationList(updatedList);
            setEditIndex(null);
        } else {
            const newEducation = { ...education }; 

            if (newEducation.graduatingYear === "") {
                newEducation.graduatingYear = "present";
            }
    
            setEducationList([...educationList, newEducation]);
        }
        
        setEducation({ institution: "", degree: "", startingYear: "", graduatingYear: "" });
    };

    const removeEducation = (index) => {
        setEducationList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const editEducation = (index) => {
        const educationToEdit = educationList[index];
        setEducation(educationToEdit);
        setEditIndex(index);
    }

    return (
        <CollapsibleComponent title="Education" icon={mdiSchool}>
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
                type="date" 
                labelText="Starting Year" 
                optional={false}
                name="startingYear"
                value={education.startingYear}
                onChange={handleInputChange}
            />

            <CustomInput 
                placeholder="6/2023" 
                type="date" 
                labelText="Graduating Year" 
                optional={true}
                name="graduatingYear"
                value={education.graduatingYear}
                onChange={handleInputChange}
            />

            <div className="submit-button">
                <button onClick={addEducation}>
                    {editIndex !== null ? "Update" : "Submit"}
                </button>
            </div>

            <div className="education-list">
                <ul>
                    {educationList.map((edu, index) => (
                    <li key={index} className="education-item">
                        <div>                                                                    
                            <div>{edu.institution}</div>
                            <div>{edu.degree}</div>
                        </div>

                        <div className="education-buttons">
                            <button onClick={() => editEducation(index)} className="edit-button">Edit</button>
                            <button onClick={() => removeEducation(index)} className="remove-button" disabled={editIndex !== null}>Remove</button>
                        </div>                        
                    </li>
                    ))}
                </ul>
            </div>
        </CollapsibleComponent>
    )
}

export default Education;