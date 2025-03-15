import './styles/App.css'
import PersonalDetails from './components/PersonalDetails';
import Resume from './components/Resume';
import Summary from './components/Summary';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import CvActions from './components/CvActions';
import { useState } from 'react';

function App() {

  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [personalSummary, setPersonalSummary] = useState("");
  
  const [educationList, setEducationList] = useState([]);

  const [experienceList, setExperienceList] = useState([]);

  return (
    <div className='app'>
      <div>
        <CvActions setPersonalDetails={setPersonalDetails} setSummary={setPersonalSummary} setEducationList={setEducationList} setExperienceList={setExperienceList} />
        <div className='input-components'>
          <PersonalDetails details={personalDetails} setDetails={setPersonalDetails} />
          <Summary summary={personalSummary} setSummary={setPersonalSummary} />
          <Education educationList={educationList} setEducationList={setEducationList} />
          <WorkExperience experienceList={experienceList} setExperienceList={setExperienceList}  />
        </div>
      </div>
      
      <Resume personalDetails={personalDetails} summary={personalSummary} educationInfo={educationList} workExperienceInfo={experienceList} />
    </div>
  );
}

export default App
