export default class TMDBProvider {
  #apiKey;

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  async getMovie(title) {
    const response = await fetch('api/try');

    if (!response.ok) {
      throw new Error(`Movie fetch failed. Status ${response.status}`);
    }

    return await response.json();
  }
}
