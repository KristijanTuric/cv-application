import "../styles/WorkInfo.css";
import { dateToMonthYear } from "./Utils";

function WorkInfo({workExperienceInfo, className}) {

    if (workExperienceInfo.length === 0) return null;

    return (
        <div className={className}>
            <h1>Work Experience</h1>
            <ul>
                {workExperienceInfo.map((work, index) => (
                    <li key={index}>

                        <div className="work-container">
                            <div>
                                <div>{dateToMonthYear(work.startingYear)} - {dateToMonthYear(work.endYear)}</div>
                                <div></div>
                            </div>

                            <div>
                                <div className="work-workplace">{work.workplace}</div>
                                <div>{work.position}</div>
                            </div>

                            <div className="work-responsibilites">
                                Job Responsibilities <br></br>
                                {work.jobResponsabilities}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkInfo;