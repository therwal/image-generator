import './ImageWindow.css';

function ImageWindow({ textValues }) {
  const { header, subheader, text } = textValues;
  return (
    <div className="ImageWindow">
      <div className="ImageWindow-container">
        <div className="ImageWindw-textArea">
          <h1>{header}</h1>
          <h2>{subheader}</h2>
          <p>{text}</p>
        </div>
        <div className="ImageWindow-whovoted">
          <div className="square square-left">
            <div className="circle">&#10003;</div>
          </div>
          <div className="square square-right">
            <div className="circle">&#x2715;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWindow;
