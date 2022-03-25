import WhoVoted from './WhoVoted';
import './ImageWindow.css';

function ImageWindow({ partylist, textValues }) {
  const { header, subheader, text } = textValues;
  const proParty = partylist.filter((p) => p.pro > 0);
  const againstParty = partylist.filter((p) => p.pro < 0);
  return (
    <div className="ImageWindow">
      <div className="ImageWindow-container">
        <div className="ImageWindw-textArea">
          <h1>{header}</h1>
          <h2>{subheader}</h2>
          <p>{text}</p>
        </div>
        <div className="ImageWindow-whovoted">
          <WhoVoted pro={true} partylist={proParty} />
          <WhoVoted pro={false} partylist={againstParty} />
        </div>
      </div>
    </div>
  );
}

export default ImageWindow;
