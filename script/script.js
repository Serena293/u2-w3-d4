const loadImgBtn = document.getElementById("load-image");
const secondaryImgBtn = document.getElementById("secondary-image");
const imgElements = document.querySelectorAll("img");
const btn = document.querySelectorAll("button");
const hideBtn = document.getElementsByClassName("hide-btn");
const cards = document.getElementsByClassName("cards");

const loadImgURL = "https://api.pexels.com/v1/search?query=nature";
const apiKey = "n5BTjpmfhx2Ykmp0FhNNWxUSmAkAnVTJnYe9fMfubp2v4WTjYmmIPGNQ";
const secondaryImgURL = "https://api.pexels.com/v1/search?query=city";

const loadImg = (link) => {
  fetch(link, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        // console.log(response);
        return response.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((data) => {
      for (let i = 0; i < imgElements.length; i++) {
        imgElements[i].setAttribute("src", data.photos[i].src.medium);
      }
      console.log(data);
    })

    .catch((error) => console.error(error));
};

// const loadSecondaryImg = () => {
//   fetch(secondaryImgURL, {
//     headers: {
//       Authorization: apiKey,
//     },
//   })
//     .then((response) => {
//       console.log(response);

//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Errore");
//       }
//     })
//     .then((data) => {
//       // console.log(data)
//       for (let i = 0; i < imgElements.length; i++) {
//         imgElements[i].setAttribute("src", data.photos[i].src.medium);
//       }
//     })
//     .catch((error) => console.error(error));
// };

const editToHide = () => {
  btn.forEach((button) => {
    if (button.innerText.trim() === "Edit") {
      button.innerText = "Hide";
      button.setAttribute("class", "hide-btn");
      button.addEventListener('click', () => {
        button.closest('.col-md-4').classList.add('d-none');
      });
    }
  });
};

// const removeCard = (i) => {
//     cards[i].classList.add("d-none");
//   };

editToHide();

loadImgBtn.addEventListener("click", () => loadImg(loadImgURL));
secondaryImgBtn.addEventListener("click", () => loadImg(secondaryImgURL));

// for (let i = 0; i < hideBtn.length; i++) {
//     hideBtn[i].addEventListener("click", ()=>{
//         for(let i=0; i<hideBtn.length; i++)
//             for(let j=0; j<cards.length; j++){
//             if(i===j){
//                 cards[j].classList.add('d-none')
//             }
//         }
//     });
//   } //hideBtn racchiuse più elementi quindi è necessario un ciclo per aggiungere la funziona tutti i pulsanti
