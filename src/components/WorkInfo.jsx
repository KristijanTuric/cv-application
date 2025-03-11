function WorkInfo({workExperienceInfo}) {

    if (workExperienceInfo.length === 0) return null;

    return (
        <div className="work-info-container">
            <h1>Work Experience</h1>
            <ul>
                {workExperienceInfo.map((work, index) => (
                    <li key={index}>
                        <strong>{work.position} - {work.workplace} - {work.startingYear} - {work.endYear}</strong><br></br>
                        <strong>Job Responsibilites</strong><br></br>
                        <strong>{work.jobResponsibilities}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkInfo;