const loadImgBtn = document.getElementById("load-image");
const secondartImgBtn = document.getElementById("secondary-image");
const hideBtn = document.getElementById("hide-btn");
const imgElements = document.querySelectorAll("img");

const loadImgURL = "https://api.pexels.com/v1/search?query=nature";
const apiKey = 'n5BTjpmfhx2Ykmp0FhNNWxUSmAkAnVTJnYe9fMfubp2v4WTjYmmIPGNQ';
const secondartImgURL = "https://api.pexels.com/v1/search?query=city";

const loadImg = () => {
  fetch(loadImgURL, {
    headers: {
      Authorization: apiKey
    }
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Errore');
    }
  })


  .catch(error => console.error(error));
};

loadImgBtn.addEventListener("click", loadImg);
