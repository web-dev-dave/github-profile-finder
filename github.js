class GitHub {
  constructor() {
    this.client_id = '7bc72ed43e8894ca219d'
    this.client_secret = '1c4ecc933cdc521363da9e1fe748175cf803383a'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    return {
      profile
    }
  }
}