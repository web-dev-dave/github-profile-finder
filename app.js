// Init github
const github = new GitHub
// Init UI
const ui = new UI

// Search Input
const searchBar = document.getElementById('search-user')

// console.log(searchBar)

// Search input event listener
searchBar.addEventListener('keyup', (e) => {
  // Get input text
  const searchText = e.target.value

  if (searchText !== '') {
    // Make http call
    github.getUser(searchText)
    .then(user => {
      if(user.profile.message === 'Not Found') {
        // Show alert
      } else {
        // Show profile
        ui.showProfile(user.profile)
      }
    })
  } else {
    // Clear profile
  }
})