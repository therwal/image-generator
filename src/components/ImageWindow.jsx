import './ImageWindow.css';

function ImageWindow({ textValues }) {
  const { header, subheader, text } = textValues;
  return (
    <div className="ImageWindow">
      <h1>{header}</h1>
      <h2>{subheader}</h2>
      <p>{text}</p>
    </div>
  );
}

export default ImageWindow;
