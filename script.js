const imageMeme = document.querySelector("img");
const btnMeme = document.querySelector("button");

async function generateMeme() {
  const response = await fetch("https://meme-api.com/gimme");
  const data1 = await response.json();
  imageMeme.src = data1.url;
}

btnMeme.addEventListener("click", generateMeme);
generateMeme();
