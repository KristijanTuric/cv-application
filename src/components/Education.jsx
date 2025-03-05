import CollapsibleComponent from "./CollapsibleComponent";
import CustomInput from "./CustomInput";

function Education() {
    return (
        <CollapsibleComponent title="Education">
            <CustomInput placeholder="University of Berlin" type="text" labelText="Institution" optional={false}/>
            <CustomInput placeholder="Ph.D in Philosophy" type="text" labelText="Degree" optional={false}/>
            <CustomInput placeholder="10/2020" type="text" labelText="Starting Year" optional={false}/>
            <CustomInput placeholder="6/2023" type="text" labelText="Graduating Year" optional={true}/>

        </CollapsibleComponent>
    )
}

export default Education;