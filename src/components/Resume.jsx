import "../styles/Resume.css";
import EducationInfo from "./EducationInfo";
import PersonalDetailsInfo from "./PersonalDetailsInfo";
import SummaryInfo from "./SummaryInfo";

function Resume({ personalDetails, summary, educationInfo }) {
    return (
        <div className="resume-container">
            <PersonalDetailsInfo details={personalDetails} />
            <SummaryInfo summary={summary} />
            <EducationInfo educationList={educationInfo} />
        </div>
    );
}

export default Resume;