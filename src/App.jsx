import { useState } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

import ImageWindow from './components/ImageWindow';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [partylist, setParty] = useState([
    { name: 'ap', pro: 0 },
    { name: 'frp', pro: 0 },
    { name: 'r', pro: 0 },
    { name: 'sv', pro: 0 },
    { name: 'mdg', pro: 0 },
    { name: 'v', pro: 0 },
    { name: 'h', pro: 0 },
    { name: 'krf', pro: 0 },
    { name: 'sp', pro: 0 },
  ]);

  const [imageSize, setImageSize] = useState(1024);

  const [textValues, setTextValues] = useState({
    header: 'Hvem stemte hva?',
    subheader: 'Rødt og SV foreslo:',
    text: 'Stortinget ber regjeringen fremme nødvendige forslag for å sikre profittfri barnehagedrift',
  });

  const updateParty = (name, value) => {
    setParty(
      partylist.map((p) => (p.name === name ? { ...p, pro: value } : p))
    );
  };

  const updateText = (e) => {
    setTextValues({ ...textValues, [e.target.name]: e.target.value });
  };

  const changeImageSize = (e) => {
    setImageSize(e.target.value);
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
      <ImageWindow partylist={partylist} textValues={textValues} />
      <Sidebar
        partylist={partylist}
        updateParty={updateParty}
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
