import CustomInput from "./CustomInput";
import "../styles/PersonalDetails.css";
import CollapsibleComponent from "./CollapsibleComponent";

function PersonalDetails({ details, setDetails }) {

    const handleChange = (field, value) => {
        setDetails(prevDetails => ({
            ...prevDetails,
            [field]: value
        }));
    };

    return (
        <CollapsibleComponent title="Personal Details">
            <CustomInput 
                placeholder="John Doe" 
                type="text" 
                labelText="Full Name" 
                optional={false} 
                value={details.fullName || ""} 
                onChange={(e) => handleChange("fullName", e.target.value)} 
            />

            <CustomInput 
                placeholder="john@email.com" 
                type="email" 
                labelText="Email" 
                optional={true} 
                value={details.email || ""} 
                onChange={(e) => handleChange("email", e.target.value)}
            />

            <CustomInput 
                placeholder="+66 1234 123" 
                type="text" 
                labelText="Phone Number" 
                optional={true} 
                value={details.phone || ""} 
                onChange={(e) => handleChange("phone", e.target.value)} 
            />

            <CustomInput 
                placeholder="Berlin, DE" 
                type="text" 
                labelText="Address" 
                optional={true} 
                value={details.address || ""} 
                onChange={(e) => handleChange("address", e.target.value)} 
            />
        </CollapsibleComponent>
    );
}

export default PersonalDetails;