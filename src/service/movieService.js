export default class MovieService {
  constructor(serviceProvider) {
    this.serviceProvider = serviceProvider;
  }

  async getMovie(title) {
    if (!title.trim()) {
      throw new Error('Title must not be blank!');
    }
    
    return await this.serviceProvider.getMovie(title);
  }

  async getPopularMovies() {
    return await this.serviceProvider.getPopularMovies();
  }
}