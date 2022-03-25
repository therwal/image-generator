import PartySelect from './PartySelect';

function PartyList({ partylist, updateParty }) {
  const pl = partylist.map((p) => (
    <PartySelect party={p} updateParty={updateParty} />
  ));
  return <div>{pl}</div>;
}

export default PartyList;
