import './WhoVoted.css';

const WhoVoted = ({ pro, partylist }) => {
  const parties = partylist.map((p) => (
    <img src={`${p.name}.png`} alt={p.name} />
  ));
  return (
    <div className={`WhoVoted ${pro ? 'WhoVoted-green' : 'WhoVoted-red'}`}>
      <div className="circle">{pro ? 'Ja' : 'Nei'}</div>
      {parties}
    </div>
  );
};

export default WhoVoted;
