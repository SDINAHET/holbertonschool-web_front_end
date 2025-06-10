function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Créer et ajouter le paragraphe
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  // Créer les boutons
  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.onclick = spooky;

  const darkButton = document.createElement('button');
  darkButton.textContent = 'Dark mode';
  darkButton.onclick = darkMode;

  const screamButton = document.createElement('button');
  screamButton.textContent = 'Scream mode';
  screamButton.onclick = screamMode;

  // Ajouter les boutons au DOM
  document.body.appendChild(spookyButton);
  document.body.appendChild(darkButton);
  document.body.appendChild(screamButton);
}

main();
