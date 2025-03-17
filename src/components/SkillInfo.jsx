import "../styles/SkillInfo.css";

function SkillInfo({skillInfo}) {
    if (!skillInfo || skillInfo.length === 0) return null;

    return (
        <div className="skill-container">
            <h1>Skills</h1>
            <ul>
                {skillInfo.map((skill, index) => (
                    <li key={index}>{skill}</li>   
                ))}
            </ul>
        </div>
    );
}

export default SkillInfo;