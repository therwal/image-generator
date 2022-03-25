import PartyList from './PartyList';
import './Sidebar.css';

function Sidebar({
  partylist,
  updateParty,
  textValues,
  updateText,
  imageSize,
  changeImageSize,
  downloadImage,
}) {
  const { header, subheader, text } = textValues;

  const handleOnChange = ({ target }) => {
    updateText(target.name, target.value);
  };

  const handleSelectChange = (e) => {
    changeImageSize(e.target.value);
  };

  return (
    <div className="Sidebar">
      <div className="Sidebar-input">
        <label htmlFor="header">Header</label>
        <input
          value={header}
          onChange={handleOnChange}
          type="text"
          name="header"
          id="header"
        />
        <label htmlFor="subheader">Subheader</label>
        <input
          value={subheader}
          onChange={handleOnChange}
          type="text"
          name="subheader"
          id="subheader"
        />
        <label htmlFor="text">text</label>
        <input
          value={text}
          onChange={handleOnChange}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <PartyList partylist={partylist} updateParty={updateParty} />
      <label htmlFor="imageSize">Image Size</label>
      <select value={imageSize} onChange={handleSelectChange} id="imageSize">
        <option value="512">Small 512x512</option>
        <option value="1024">Medium 1024x1024</option>
        <option value="2048">Large 2048x2048</option>
      </select>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
}

export default Sidebar;
