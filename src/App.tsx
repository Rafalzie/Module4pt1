

import React from 'react';
import Button from './components/BlueButton';  // Assuming Button component is in the 'components' folder
import Card from './components/card';      // Assuming Card component is in the 'components' folder
import './App.css'

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Centers the content */}
      
      {/* Render the Button component */}
      <Button />
      
      {/* Spacing between Button and Card */}
      <div style={{ margin: '30px 0' }}></div>
      
      {/* Render the Card component */}
      <Card
        imageSrc="https://treesforall.nl/app/uploads/2022/03/Bos-Nederland-Epe-e1719389547661-0x835-c-default.webp"
        title="Beautiful Forest"
        description="forest"
        link="https://treesforall.nl/app/uploads/2022/03/Bos-Nederland-Epe-e1719389547661-0x835-c-default.webp"
      />

    </div>
  );
};

export default App;

