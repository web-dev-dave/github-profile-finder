// Init github
const github = new GitHub

// Search Input
const searchBar = document.getElementById('search-user')

// console.log(searchBar)

// Search input event listener
searchBar.addEventListener('keyup', (e) => {
  // Get input text
  const searchText = e.target.value

  if (searchText !== '') {
    // console.log('Yessboooi')
    github.getUser(searchText)
    .then(user => console.log(user))
  }
  e.preventDefault()
} )