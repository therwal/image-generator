import './PartySelect.css';

function PartySelect({ party, updateParty }) {
  const handleClick = ({ target }) => {
    let val = 0;
    if (target.name === 'pro') val = 1;
    else if (target.name === 'against') val = -1;
    updateParty(party.name, val);
  };
  return (
    <div className="PartySelect-buttons">
      <h2>{party.name}</h2>
      <button
        className="PartySelect-btn PartySelect-btn-left"
        name="pro"
        onClick={handleClick}
      >
        <i className="fas fa-check"></i> Ja
      </button>
      <button className="PartySelect-btn" name="neutral" onClick={handleClick}>
        <i className="fas fa-minus"></i> Fjern
      </button>
      <button
        className="PartySelect-btn PartySelect-btn-right"
        name="against"
        onClick={handleClick}
      >
        <i className="fas fa-times"></i> Nei
      </button>
    </div>
  );
}

export default PartySelect;
