import "../styles/Resume.css";
import EducationInfo from "./EducationInfo";
import PersonalDetailsInfo from "./PersonalDetailsInfo";
import SummaryInfo from "./SummaryInfo";
import WorkInfo from "./WorkInfo";

function Resume({ personalDetails, summary, educationInfo, workExperienceInfo }) {
    return (
        <div className="resume-container">
            <PersonalDetailsInfo details={personalDetails} />
            <SummaryInfo className="resume-summary" summary={summary} />
            <EducationInfo className="resume-education" educationList={educationInfo} />
            <WorkInfo className="resume-work" workExperienceInfo={workExperienceInfo} />
        </div>
    );
}

export default Resume;