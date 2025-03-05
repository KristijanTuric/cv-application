import "../styles/PersonalDetailsInfo.css";

function PersonalDetailsInfo({ details }) {
    return (
        <div className="personal-details-container">
            <h1>{details.fullName || "John Doe"}</h1>
            <div className="contact-details">
                <h3>{details.email || "john@email.com"}</h3>
                <h3>{details.phone || "+66 1234 123"}</h3>
                <h3>{details.address || "Berlin, DE"}</h3>
            </div>
        </div>
    );
}

export default PersonalDetailsInfo;