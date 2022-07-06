/*
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
*/
/*
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
//creo un arrey di oggetti 
*/
const posts = [
    {
      id: 1,
      autore: "Mario Rossi",
      aurtoreImg: "https://source.unsplash.com/random/100x100/?people,space",
      time: "09/05/2022",
      postText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
      postImg: "https://source.unsplash.com/random/400x400/?nature,space",
      likes: 53,
    },
    {
      id: 2,
      autore: "Maria Pinco",
      autoreImg: "https://source.unsplash.com/random/100x100/?people,space",
      time: "10/10/2022",
      postText:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem in quas. Aliquam eos ipsum, suscipit expedita provident fugiat nihil quam quas possimus iusto nemo in doloremque aliquid, minima rerum!",
      postImg: "https://source.unsplash.com/random/400x400/?peple,space",
      likes: 22,
    },

  ];

//#Milestone 2------Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
//recupero elementi dal DOM
const elencoPost = document.getElementById("container");
const autoreIMg = document.querySelector(".profile-pic");
const autore = document.querySelector(".post-meta__author");
const time = document.querySelector(".post-meta__time");
const postText = document.querySelector(".post__text");
const postImg = document.querySelector(".post__image");
const likes = document.getElementById("like-counter-1");


// stampiamo i post del nostro feed.
//creo un ciclo for per girare nell'arrey 
for (let i = 0; i < posts.length; i++) {
    // recupero i singoli valori del mio arrey 
    const { id, autore,autoreImg, time, postText, postImg, likes } = posts[i];
//monto il posto da inserire nel dom (container)=(elencoPost)
    let post = `<div class="post">
  <div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">
        <img class="profile-pic" src="${autoreImg}" alt="Phil Mangione" />
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${autore}</div>
        <div class="post-meta__time">${time}</div>
      </div>
    </div>
  </div>
  <div class="post__text">
  ${postText}
  </div>
  <div class="post__image">
    <img src="${postImg}" alt="" />
  </div>
  <div class="post__footer">
    <div class="likes js-likes">
      <div class="likes__cta">
        <a class="like-button js-like-button" href="#" data-postid="1">
          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
          <span class="like-button__label">Mi Piace</span>
        </a>
      </div>
      <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone</div>
      </div>
      </div>
      </div>`;
      elencoPost.innerHTML += post;
    }
    
    
