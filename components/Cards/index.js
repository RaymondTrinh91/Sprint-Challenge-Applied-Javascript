// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response =>{
        // response.data.articles.bootstrap.forEach(object =>{
        //     const bootstrap = cardContain.appendChild(cardCreator(object))
        // })
        // response.data.articles.javascript.forEach(object =>{
        //     const javascript = cardContain.appendChild(cardCreator(object))
        // })
        // response.data.articles.jquery.forEach(object =>{
        //     const jquery = cardContain.appendChild(cardCreator(object))
        // })
        // response.data.articles.node.forEach(object =>{
        //     const node = cardContain.appendChild(cardCreator(object))
        // })
        // response.data.articles.technology.forEach(object =>{
        //    const technology = cardContain.appendChild(cardCreator(object))
        // })
        for(let key in response.data.articles){
            response.data.articles[key].forEach(object =>{
                cardContain.appendChild(cardCreator(object));
            })
        }
    })



const cardContain = document.querySelector(".cards-container");

function cardCreator(object) {
    //Element
    const
    card = document.createElement("div"),
    headline = document.createElement("div"),
    authorInfo = document.createElement("div"),
    imgContain = document.createElement("div"),
    authorImg   = document.createElement("img"),
    authorName = document.createElement("span");

    //Structure
    card.appendChild(headline);
    card.appendChild(authorInfo);
    authorInfo.appendChild(imgContain);
    imgContain.appendChild(authorImg);
    authorInfo.appendChild(authorName);

    //Classes
    card.classList.add("card");
    headline.classList.add("headline");
    authorInfo.classList.add("author");
    imgContain.classList.add("img-container");

    //Content
    headline.textContent = object.headline;
    authorImg.src = object.authorPhoto;
    authorName.textContent = object.authorName;

    return card;
}

