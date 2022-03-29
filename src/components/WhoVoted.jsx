import './WhoVoted.css';

const WhoVoted = ({ pro, partylist }) => {
  const parties = partylist.map((p) => (
    // <img src={`${p.name}.png`} alt={p.name} />
    <img
      src={`https://res.cloudinary.com/daq5ahswm/image/upload/v1648383574/party%20logos/${p.name}.png`}
      alt={p.name}
    />
  ));
  return (
    <div className={`WhoVoted ${pro ? 'WhoVoted-green' : 'WhoVoted-red'}`}>
      <div className="circle">
        {pro ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>
      {parties}
    </div>
  );
};

export default WhoVoted;
