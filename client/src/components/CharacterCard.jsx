//import Styles
import "./CharacterCard.css";
export default function CharacterCard({ character }) {
  return (
    <>
      <div className="character-card">
        <h2>{character.name}</h2>
        <h3> Played By {character.played_by} </h3>
        <p> {character.description} </p>
      </div>
    </>
  );
}
