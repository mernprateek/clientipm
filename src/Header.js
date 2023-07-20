import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const sections = [
    { title: 'About', subsections: ['Our Team', 'Our Programs'] },
    { title: 'Preparation Module', subsections: ['Mentorship Course', 'Classroom Course', 'Online Course','Short Term Course','Test Series'] },
    { title: 'Exam', subsections: ['IPMAT', 'About IPMAT Exam','Colleges'] },
    { title: 'Resources', subsections: ['Exam Analysis', 'Exam News', 'IPM-AT Exams Calender'] },
    { title: 'Contact Us', subsections: ['Address', 'Mail', 'Map', 'Contact Us'] },
    { title: 'Student Zone', subsections: ['Subsection W'] },
  ];

  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubsection, setSelectedSubsection] = useState('');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setSelectedSubsection('');
  };

  const handleSubsectionChange = (subsection) => {
    setSelectedSubsection(subsection);
  };

  return (
    <div className="header">
      
      <div className="section-dropdowns">
        {sections.map((section, index) => (
          <div key={index} className="section-dropdown">
            <button
              className={`section-button ${selectedSection === section.title ? 'active' : ''}`}
              onClick={() => handleSectionChange(section.title)}
            >
              {section.title}
            </button>
            {selectedSection === section.title && (
              <div className="subsection-dropdown">
                {section.subsections.map((subsection, index) => (
                  <Link
                    key={index}
                    to={`/${section.title.replace(/\s+/g, '-').toLowerCase()}/${subsection.replace(/\s+/g, '-').toLowerCase()}`}
                    className={`subsection-button ${selectedSubsection === subsection ? 'active' : ''}`}
                    onClick={() => handleSubsectionChange(subsection)}
                  >
                    {subsection}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
