/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/




//  Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return
//            the following DOM element:
// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>


// when we create the CompositionEvent, instead of passing in string pass in object and pass in the values on the single object
function createCard(obj){
  // 1- Create HTML markup
  const card = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitHubLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  // 3- Add some class names/attributes
  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  
  // 4 Add content
  name.textContent = obj.data.name;
  img.src = obj.data.avatar_url;
  userName.textContent = obj.data.login;
  location.textContent = `Location: ${obj.data.location}`;
  profile.textContent = `Profile: `;
  gitHubLink.setAttribute('href', obj.data.html_url);
  gitHubLink.textContent = obj.data.html_url;
  followers.textContent = `Followers ${obj.data.followers}`;
  following.textContent = `Following ${obj.data.following}`;
  bio.textContent = `Bio: ${obj.data.bio}`;
  
  // 2- Define HTML structure
  card.append(img);
  card.append(info);
  info.append(name);
  info.append(userName);
  info.append(location);
  info.append(profile);
  profile.append(gitHubLink);
  info.append(followers);
  info.append(following);
  info.append(bio);
  console.log(card);
  return card;
};

axios.get('https://api.github.com/users/Aliszl')
  .then((response) => {
    console.log(response);
     let newCard = document.querySelector('.cards');
     newCard.append(createCard(response));
    
  })
  .catch(error => {
    console.log(error);
  });
  


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [];
axios.get('https://api.github.com/users/Aliszl/followers')
.then((response) =>{
  console.log(response);
  for(let i = 0; i < response.data.length; i ++){
    followersArray.push(response.data[i].login)
  }
  console.log(followersArray);
  return followersArray;
})
.then(data =>{
  for(let i = 0; i < followersArray.length; i ++){
    let followers = 'https://api.github.com/users/';
    followers += followersArray[i];
    axios.get(followers)
    .then(response => {
      cards.append(createCard(response.data));
    }).catch(error =>{
      console.log(error);
    })
  }
})
.catch(error =>{
  console.log(error);
})

// .then(data =>{
//   for(let i = 0; i < followersArray.length; i ++){

//     // let search = `https://api.github.com/users/${followersArray[i].login}`;

//   }
// })
// .catch(error =>{
//   console.log(error);
// })









// from challenge:  const acc = document.querySelector('.container');
//     response.data.message.forEach(img => {
//       acc.append(createCard(img.split('/')[img.split('/').length - 2].toUpperCase(), img));
// }
// menu-button.append(menuCreator(menuItems));



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
