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
        ui.showAlert('User not found', 'alert alert-danger')
        console.log(user.profile)
      } else {
        console.log(user)
        // Show profile
        ui.showProfile(user.profile)
        // Show repos
        ui.showRepos(user.repos)
      }
    })
    .catch(error => {
      ui.showAlert(`${error.message}`, 'alert alert-danger')
    });
  } else {
    // Clear profile
    ui.clearProfile()
  }
})