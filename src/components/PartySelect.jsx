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
        className="PartySelect-button PartySelect-button-left"
        name="pro"
        onClick={handleClick}
      >
        <i className="fas fa-check"></i> For
      </button>
      <button
        className="PartySelect-button"
        name="neutral"
        onClick={handleClick}
      >
        <i className="fas fa-minus"></i> Fjern
      </button>
      <button
        className="PartySelect-button PartySelect-button-right"
        name="against"
        onClick={handleClick}
      >
        <i className="fas fa-times"></i> Imot
      </button>
    </div>
  );
}

export default PartySelect;
