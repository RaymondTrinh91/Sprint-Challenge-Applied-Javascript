// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response =>{
        response.data.topics.forEach(topic =>{
            const tabe = tabContain.appendChild(tab(topic));
            tabe.addEventListener('click', ()=>{
                `${tab(topic)}`.style.display = "block";
                `!${tab(topic)}`.style.display = "none";
            })
            console.log(tabe);
        })
    })

const tabContain = document.querySelector(".topics");

function tab(tabTopic){
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = tabTopic;
    return tab;
}