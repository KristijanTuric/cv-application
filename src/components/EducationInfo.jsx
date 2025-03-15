import "../styles/EducationInfo.css";
import { dateToMonthYear } from "./Utils.jsx";

function EducationInfo({educationList, className}) {

    if (educationList.length === 0) return null;

    return (
        <div className={className}>
            <h1>Education</h1>
            <ul className="education-list">
                {educationList.map((edu, index) => (
                    <li key={index}>
                        <div className="education-container">
                            <div>
                                <div>{dateToMonthYear(edu.startingYear)} - {dateToMonthYear(edu.graduatingYear)}</div>
                                <div></div>
                            </div>
                            <div>
                                <div className="education-institution">{edu.institution}</div>
                                <div>{edu.degree}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EducationInfo;