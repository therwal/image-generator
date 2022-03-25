import { useState } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

import ImageWindow from './components/ImageWindow';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [imageSize, setImageSize] = useState(1024);
  const [textValues, setTextValues] = useState({
    header: 'Header',
    subheader: 'Subheader',
    text: 'Some text',
  });

  const updateText = (name, value) => {
    setTextValues({ ...textValues, [name]: value });
  };

  const changeImageSize = (e) => {
    setImageSize(e);
  };

  const downloadImage = () => {
    toPng(document.querySelector('.ImageWindow'), {
      canvasWidth: imageSize,
      canvasHeight: imageSize,
    }).then((dataUrl) => {
      download(dataUrl, 'image.png');
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hvem stemte</h1>
      </header>
      <main>
        <ImageWindow textValues={textValues} />
        <Sidebar
          textValues={textValues}
          updateText={updateText}
          imageSize={imageSize}
          changeImageSize={changeImageSize}
          downloadImage={downloadImage}
        />
      </main>
    </div>
  );
}

export default App;
