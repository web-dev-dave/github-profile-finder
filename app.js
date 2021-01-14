// Search Input
const searchBar = document.getElementById('search-user')

console.log(searchBar)

// Search input event listener
searchBar.addEventListener('keyup', (e) => {
  console.log(e.target.value)

  e.preventDefault()
} )