import "../styles/WorkInfo.css";
import { dateToMonthYear } from "./Utils";

function WorkInfo({workExperienceInfo, className}) {

    if (workExperienceInfo.length === 0) return null;

    return (
        <div className={className}>
            <h1>Work Experience</h1>
            <ul className="work-list">
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
                                {work.jobResponsabilities.length === 0 ? ( null ) : (
                                    <>
                                        <div>Job Responsabilities</div>
                                        <ul>
                                        {work.jobResponsabilities.map((responsibility, index) => (
                                            <li key={index}>{responsibility}</li>
                                        ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkInfo;