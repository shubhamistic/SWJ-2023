import React, { useState } from 'react';

const Component1 = () => (
    <div className='smallBox'>
    <h2>Component 1</h2>
    <div className='smallBoxImage1'></div>
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, felis id fringilla dapibus, lectus lorem dignissim tellus, ac tincidunt nisl dolor ac libero. Donec malesuada congue mi in bibendum. Phasellus sollicitudin augue vel nunc aliquet, ut suscipit risus dictum. Curabitur tincidunt, dui sed malesuada tempor, mauris mi hendrerit arcu, at aliquet justo orci ut mi.</p>
    </div>
  </div>

);

const Component2 = () => (
    <div className='smallBox'>
    <h2>Component 2</h2>
    <div className='smallBoxImage2'></div>
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, felis id fringilla dapibus, lectus lorem dignissim tellus, ac tincidunt nisl dolor ac libero. Donec malesuada congue mi in bibendum. Phasellus sollicitudin augue vel nunc aliquet, ut suscipit risus dictum. Curabitur tincidunt, dui sed malesuada tempor, mauris mi hendrerit arcu, at aliquet justo orci ut mi.</p>
    </div>
  </div>
);
const Component3 = () => (
    <div className='smallBox'>
    <h2>Component 3</h2>
    <div className='smallBoxImage3'></div>
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, felis id fringilla dapibus, lectus lorem dignissim tellus, ac tincidunt nisl dolor ac libero. Donec malesuada congue mi in bibendum. Phasellus sollicitudin augue vel nunc aliquet, ut suscipit risus dictum. Curabitur tincidunt, dui sed malesuada tempor, mauris mi hendrerit arcu, at aliquet justo orci ut mi.</p>
    </div>
  </div>
);

const MainComponent = ({ selectedComponent }) => (
  <div>
    {selectedComponent === 1 && <Component1 />}
    {selectedComponent === 2 && <Component2 />}
    {selectedComponent === 3 && <Component3 />}

  </div>
);

const ButtonComponent = ({ buttonText, onClick }) => (
  <button className="aboutButtons" onClick={onClick}>{buttonText}</button>
);

const TheBox = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  const handleButtonClick = (index) => {
    setSelectedComponent(index);
  };

  return (
    <div className='theBox noScroll'>
      <div className='aboutButtonContainer'>
        <ButtonComponent buttonText="Component 1" onClick={() => handleButtonClick(1)} />
        <ButtonComponent buttonText="Component 2" onClick={() => handleButtonClick(2)} />
        <ButtonComponent buttonText="Component 3" onClick={() => handleButtonClick(3)} />
      </div>
      <div className='mainAbout noScroll'>
      <MainComponent selectedComponent={selectedComponent} />
      </div>
        
    </div>
  );
};

export default TheBox;
