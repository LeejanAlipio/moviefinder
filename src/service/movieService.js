export default class MovieService {
  constructor(serviceProvider) {
    this.serviceProvider = serviceProvider;
  }

  async getMovie(title) {
    return await this.serviceProvider.getMovie(title);
  }

  async getPopularMovies() {
    return await this.serviceProvider.getPopularMovies();
  }
}