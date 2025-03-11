import "../styles/PersonalDetailsInfo.css";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiHome } from "@mdi/js";

function PersonalDetailsInfo({ details }) {
    return (
        <div className="personal-details-container">
            <h1>{details.fullName || "John Doe"}</h1>
            <div className="contact-details">
                <div className="contact-element">
                    <Icon path={mdiEmail} size={1}/>
                    <h3>{details.email || "john@email.com"}</h3>
                </div>
                
                <div className="contact-element">
                    <Icon path={mdiPhone} size={1}/>
                    <h3>{details.phone || "+66 1234 123"}</h3>
                </div>

                <div className="contact-element">
                    <Icon path={mdiHome} size={1}/>
                    <h3>{details.address || "Berlin, DE"}</h3>
                </div>
            </div>
        </div>
    );
}

export default PersonalDetailsInfo;