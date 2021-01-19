class GitHub {
  constructor() {
    // this.client_id = '7bc72ed43e8894ca219d'
    // this.client_secret = '6f74ab838cf6842c75926aae70cc8229ab22d20f'
    this.config = {
      headers: {
        Authorization: 'token 227c7bf6e526d1d4c040e24d5d60ea4b965720b8'
      },
    }
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

async getUser(user) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config)

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config)

    // concurrently fetch profile and repos
    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}



