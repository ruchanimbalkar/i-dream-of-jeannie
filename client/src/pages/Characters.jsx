import Card from "../components/CharacterCard.jsx";
export default function Home({ characters }) {
  return (
    <>
      <h2>Welcome to the Home Page</h2>
      <div className="card">
        {characters.map((character, index) => (
          <Card character={character} key={"character_" + index} />
        ))}
      </div>
    </>
  );
}
