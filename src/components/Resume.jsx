import "../styles/Resume.css";
import EducationInfo from "./EducationInfo";
import PersonalDetailsInfo from "./PersonalDetailsInfo";
import SkillInfo from "./SkillInfo";
import SummaryInfo from "./SummaryInfo";
import WorkInfo from "./WorkInfo";

function Resume({ personalDetails, summary, educationInfo, workExperienceInfo, skillInfo }) {
    return (
        <div className="resume-container">
            <PersonalDetailsInfo details={personalDetails} />
            <SummaryInfo className="resume-summary" summary={summary} />
            <EducationInfo className="resume-education" educationList={educationInfo} />
            <WorkInfo className="resume-work" workExperienceInfo={workExperienceInfo} />
            <SkillInfo skillInfo={skillInfo} />
        </div>
    );
}

export default Resume;