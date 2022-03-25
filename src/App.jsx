import { useState } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

import ImageWindow from './components/ImageWindow';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [imageSize, setImageSize] = useState(1024);
  const [textValues, setTextValues] = useState({
    header: 'Hvem stemte hva?',
    subheader: 'Rødt og SV foreslo:',
    text: 'Stortinget ber regjeringen fremme nødvendige forslag for å sikre profittfri barnehagedrift',
  });

  const updateText = (name, value) => {
    setTextValues({ ...textValues, [name]: value });
  };

  const changeImageSize = (e) => {
    setImageSize(e);
  };

  const downloadImage = () => {
    toPng(document.querySelector('.ImageWindow-container'), {
      canvasWidth: imageSize,
      canvasHeight: imageSize,
    }).then((dataUrl) => {
      download(dataUrl, 'image.png');
    });
  };
  return (
    <div className="App">
      <ImageWindow textValues={textValues} />
      <Sidebar
        textValues={textValues}
        updateText={updateText}
        imageSize={imageSize}
        changeImageSize={changeImageSize}
        downloadImage={downloadImage}
      />
    </div>
  );
}

export default App;
