//
let button1 = document.getElementsByClassName("btn")[0];
let button2 = document.getElementsByClassName("btn")[1];

//
button1.addEventListener("click", getRandomJoke);
button2.addEventListener("click", getRandomFoxImage);


//
let responseJoke = document.getElementsByClassName("result")[0];
async function getRandomJoke() {
  const getJokes = async () => {
    const response = await fetch(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const data = await response.json();
    return data;
  };
  const jokeResponse = await getJokes();
  let jokeDisplay = jokeResponse.joke;
  responseJoke.innerHTML = jokeDisplay;
}

//
let responseFoxImage = document.getElementsByClassName("result")[1];
async function getRandomFoxImage() {
  const getFoxImage = async () => {
    const response = await fetch("https://randomfox.ca/floof/");
    const data = await response.json();
    return data;
  };
  const resultFoxImage = await getFoxImage();
  let displayFoxImage = resultFoxImage.image;
  responseFoxImage.style.backgroundImage = "url(" + displayFoxImage + ")";
}
