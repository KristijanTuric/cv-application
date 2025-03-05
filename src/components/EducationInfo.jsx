function EducationInfo({educationList}) {

    if (educationList.length === 0) return null;

    return (
        <div className="education-info-container">
            <h1>Education</h1>
            <ul>
                {educationList.map((edu, index) => (
                    <li key={index}>
                        <strong>{edu.institution} - {edu.degree} - {edu.startingYear} - {edu.graduatingYear}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EducationInfo;