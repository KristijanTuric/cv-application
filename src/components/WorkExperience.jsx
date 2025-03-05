import CollapsibleComponent from "./CollapsibleComponent";
import CustomInput from "./CustomInput";

function WorkExperience() {
    return (
        <CollapsibleComponent title="Work Experience">
            <CustomInput placeholder="Web Developer" type="text" labelText="Position" optional={false}/>
            <CustomInput placeholder="Company Inc." type="email" labelText="Workplace" optional={false}/>
            <CustomInput placeholder="11/2022" type="text" labelText="Starting Year" optional={false}/>
            <CustomInput placeholder="3/2023" type="text" labelText="End Year" optional={true}/>
            <CustomInput placeholder="TODO" type="text" labelText="Job Responsabilites" optional={true}/>
        </CollapsibleComponent>
    );
}

export default WorkExperience;