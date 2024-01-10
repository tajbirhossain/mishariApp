import { useState } from 'react';

const SpeciesComponent = () => {
  const [selectedSpecies, setSelectedSpecies] = useState(null); // State to hold the selected species

  const speciesArray = ['Species A', 'Species B', 'Species C']; // Your array of species

  const handleSpeciesSelect = species => {
    setSelectedSpecies(species); // Update the selected species in state
  };

  return (
    <div>
      <h1>Select a Species:</h1>
      <ul>
        {speciesArray.map((species, index) => (
          <li
            key={index}
            onClick={() => handleSpeciesSelect(species)}
            className={selectedSpecies === species ? 'selected' : ''}
          >
            {species}
          </li>
        ))}
      </ul>
      {selectedSpecies && (
        <div>
          <p>You've selected: {selectedSpecies}</p>
          {/* Apply CSS based on the selected species */}
          <style jsx>{`
            .selected {
              color: blue;
              font-weight: bold;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default SpeciesComponent;
