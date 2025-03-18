import "../styles/CvActions.css";

function CvActions({setPersonalDetails, setEducationList, setExperienceList, setSummary, setSkills}) {

    function addExample() {
        setPersonalDetails({fullName: "Geralt of Rivia", email: "geralt@kaermorhen.com", phone: "+123-456-789", address: "Kaer Morhen, The Continent"});
        setEducationList([{institution: "Kaer Morhen School of the Wolf", degree: "Ph.D in Alchemy & Elixirs", startingYear: "01-01-1265", graduatingYear: "01-01-1269"}]);
        setExperienceList([{position: "Royal Advisor (Briefly)", workplace: "Nilfgaardian Empire", startingYear: "01-01-1268", endYear: "", 
            jobResponsabilities: ["Provided counsel on supernatural threats", "Assisted in the search for Ciri, ensuring the safety of the Elder Blood"]}]);
        setSummary("Experienced monster slayer and expert in supernatural threats, specializing in contract-based monster hunting, alchemy, and swordsmanship. Trained at Kaer Morhen, I have spent decades traversing The Continent, solving curses, and battling creatures of legend. Known for my sharp instincts, even sharper blades, and a strong moral code—when coin is involved.");
        setSkills([
            "Master Swordsmanship",
            "Alchemy & Potion Brewing",
            "Sign Magic Proficiency",
            "Monster Hunting & Tracking"
        ]);
    }

    function clearResume() {
        setPersonalDetails({fullName: "", email: "", phone: "", address: ""});
        setEducationList([]);
        setExperienceList([]);
        setSummary("");
        setSkills([]);
    }

    return (
        <div className="action-buttons">
            <button className="action-clear" onClick={clearResume}>Clear CV</button>
            <button className="action-load" onClick={addExample}>Load Example CV</button>
        </div>
    );
};

export default CvActions;