import "../styles/Resume.css";
import PersonalDetailsInfo from "./PersonalDetailsInfo";
import SummaryInfo from "./SummaryInfo";

function Resume({ personalDetails, summary }) {
    return (
        <div className="resume-container">
            <PersonalDetailsInfo details={personalDetails} />
            <SummaryInfo summary={summary} />
        </div>
    );
}

export default Resume;