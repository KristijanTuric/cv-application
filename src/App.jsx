import './styles/App.css'
import PersonalDetails from './components/PersonalDetails';
import Resume from './components/Resume';
import Summary from './components/Summary';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
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

  return (
    <div className='app'>
      <div className='input-components'>
        <PersonalDetails details={personalDetails} setDetails={setPersonalDetails} />
        <Summary summary={personalSummary} setSummary={setPersonalSummary} />
        <Education educationList={educationList} setEducationList={setEducationList} />
        <WorkExperience  />
      </div>
      
      <Resume personalDetails={personalDetails} summary={personalSummary} educationInfo={educationList}/>
    </div>
  );
}

export default App
