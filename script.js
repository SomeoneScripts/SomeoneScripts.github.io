const recent = [];
const maxRecent = 4;

function ChangeBackground() {
  let index;
  do {
    index = Math.floor(Math.random() * 20);
  } while (recent.includes(index));

  recent.push(index);
  if (recent.length > maxRecent) recent.shift();

  document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/SomeoneScripts/SomeoneScripts.github.io/main/Images/Background${index}.png')`;
}

ChangeBackground();
setInterval(ChangeBackground, 30000);