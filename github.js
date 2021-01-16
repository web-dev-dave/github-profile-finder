class GitHub {
  constructor() {
    this.client_id = '7bc72ed43e8894ca219d'
    this.client_secret = '6f74ab838cf6842c75926aae70cc8229ab22d20f'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    // console.log(profileResponse)

    const profile = await profileResponse.json()

    
    return {
      profile
    }

  }
}

