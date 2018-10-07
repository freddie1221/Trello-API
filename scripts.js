const key = '51c8d95afc906bf667ab0535ac782362'
const token = 'e0cf35475cd79f9a35d32ff1cc8b1cdf6a006875972e6672a3d395b0da8039e8'
const listId = '598b7836aa7a8937cfd73260'
const cardParameters = 'fields=id,name,desc'

const url = `https://api.trello.com/1/lists/${listId}/cards?${cardParameters}&key=${key}&token=${token}`


const wholePage = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')

wholePage.appendChild(container)
// is their container a child of the div

fetch(url)
  .catch(error => console.log('BAD', error))
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
    console.log(data)
    for(x = 0; x < data.length; x++) {
      var card = document.createElement('div')
      card.textContent = data[x].name
      container.appendChild(card)
    }

    // each object in the array,
    // create a card element
    // append the title to each card
    // append each card as a child to the container

    

  });

  
  
  // OK, something to assign it to a variable
  // If I just assign an identifier to the function, will that make the response object available?
