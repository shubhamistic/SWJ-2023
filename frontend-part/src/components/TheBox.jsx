import React, { useState, useEffect } from 'react';

const Component1 = () => (
  <div className='smallBox'>
    <h2>Overview</h2>
    <div className='smallBoxImage1'></div>
    <div>
      <p className='aboutPara'>
      Startup Weekend is a three-day workshop that provides a collaborative and creative environment for
participants to develop their entrepreneurial skills. The event revolves around pitching, designing,
and prototyping business ideas. 

      </p>
    </div>
  </div>
);

const Component2 = () => (
  <div className='smallBox'>
    <h2 className='boxHeading'>Objective</h2>
    <div className='smallBoxImage2'></div>
    <div>
      <p className='aboutPara'>
      The main objective is to encourage and boost participants' confidence and skillset through experiential learning. Throughout the event, attendees engage in various activities such as brainstorming, ideation, market research, business model development, and creating prototypes. They receive guidance from mentors and industry experts who provide valuable insights and advice.

Startup Weekend offers a platform for aspiring entrepreneurs to learn, collaborate, and transform their ideas into viable business ventures. It is a unique experience that combines teamwork, creativity, and entrepreneurship, providing participants with valuable proficiency and knowledge to pursue their entrepreneurial endeavors.
      </p>
    </div>
  </div>
);

const Component3 = () => (
  <div className='smallBox'>
    <h2>Participation</h2>
    <div className='smallBoxImage3'></div>
    <div>
      <p className='aboutPara'>
      Startup Weekend is open to anyone interested in entrepreneurship, regardless of their prior experience, background, or skill set. Participants can be aspiring entrepreneurs, professionals from various industries, students, developers, designers, or individuals with innovative ideas. The inclusive nature of the event encourages diversity and collaboration among participants. Whether you have a startup idea of your own or want to join a team and contribute your skills, Startup Weekend provides a platform for individuals to learn, pitch, design, and prototype startup ideas. The primary aim is to enhance entrepreneurial abilities, elevate confidence, and cultivate hands-on learning experience in a nurturing and growing setting.
      </p>
    </div>
  </div>
);

const Component4 = () => (
  <div className='smallBox'>
    <h2>Judges</h2>
    <div className='smallBoxImage4'></div>
    <div>
      <p className='aboutPara'>
      The panel of judges evaluates the startup ideas of the teams based on their progress, innovation, creativity, and model development. Their feedback and guidance are very important for a constructive boost and a motivational push for all the participants.
      </p>
    </div>
  </div>
);

const MainComponent = ({ selectedComponent }) => (
  <div>
    {selectedComponent === 1 && <Component1 />}
    {selectedComponent === 2 && <Component2 />}
    {selectedComponent === 3 && <Component3 />}
    {selectedComponent === 4 && <Component4 />}
  </div>
);

const ButtonComponent = ({ buttonText, onClick, isSelected, isSmallScreen }) => (
  <button className={`aboutButtons ${isSelected ? 'selected' : ''}`} onClick={onClick}>
    {buttonText}
     {/* Down arrow when the button is selected */}
  </button>
);

const TheBox = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleButtonClick = (index) => {
    setSelectedComponent(index);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className='theBox noScroll'>
      <div className='aboutButtonContainer noScroll'>
        {isSmallScreen ? (
          <button className={`aboutButtons noScroll ${isDropdownOpen ? 'selected' : ''}`} onClick={toggleDropdown}>
            {selectedComponent === 1 && 'Overview'}
            {selectedComponent === 2 && 'Objective'}
            {selectedComponent === 3 && 'Participation'}
            {selectedComponent === 4 && 'Judges'}
            <span>&#x25BC;</span> {/* Down arrow */}
          </button>
        ) : (
          <div className='noScroll'>
            <ButtonComponent
              buttonText='Overview'
              onClick={() => handleButtonClick(1)}
              isSelected={selectedComponent === 1}
              isSmallScreen={false}
            />
            <ButtonComponent
              buttonText='Objective'
              onClick={() => handleButtonClick(2)}
              isSelected={selectedComponent === 2}
              isSmallScreen={false}
            />
            <ButtonComponent
              buttonText='Participation'
              onClick={() => handleButtonClick(3)}
              isSelected={selectedComponent === 3}
              isSmallScreen={false}
            />
            <ButtonComponent
              buttonText='Judges'
              onClick={() => handleButtonClick(4)}
              isSelected={selectedComponent === 4}
              isSmallScreen={false}
            />
          </div>
        )}
        {isDropdownOpen && isSmallScreen && (
          <div className='dropdownMenu noScroll'>
            {selectedComponent !== 1 && (
              <ButtonComponent
                buttonText='Overview'
                onClick={() => handleButtonClick(1)}
                isSelected={selectedComponent === 1}
                isSmallScreen={true}
              />
            )}
            {selectedComponent !== 2 && (
              <ButtonComponent
                buttonText='Objective'
                onClick={() => handleButtonClick(2)}
                isSelected={selectedComponent === 2}
                isSmallScreen={true}
              />
            )}
            {selectedComponent !== 3 && (
              <ButtonComponent
                buttonText='Participation'
                onClick={() => handleButtonClick(3)}
                isSelected={selectedComponent === 3}
                isSmallScreen={true}
              />
            )}
            {selectedComponent !== 4 && (
              <ButtonComponent
                buttonText='Judges'
                onClick={() => handleButtonClick(4)}
                isSelected={selectedComponent === 4}
                isSmallScreen={true}
              />
            )}
          </div>
        )}
      </div>
      <div className='mainAbout noScroll'>
        <MainComponent selectedComponent={selectedComponent} />
      </div>
    </div>
  );
};

export default TheBox;
