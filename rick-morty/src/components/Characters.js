export default function Characters(props) {
    const { characters } = props;
    console.log(characters);
    
    return <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home">Volver al inicio</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <p>{character.name}</p>
                </div>
            ))}
        </div>
    </div>
}