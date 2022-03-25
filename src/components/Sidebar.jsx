import './Sidebar.css';

function Sidebar({ imageSize, changeImageSize, downloadImage }) {
  const handleChange = (e) => {
    changeImageSize(e.target.value);
  };
  return (
    <div className="Sidebar">
      <select value={imageSize} onChange={handleChange}>
        <option value="512">Small 512x512</option>
        <option value="1024">Medium 1024x1024</option>
        <option value="2048">Large 2048x2048</option>
      </select>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
}

export default Sidebar;
