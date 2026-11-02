import MovieService from '../src/service/movieService.js';

describe("uses provider's method", () => {
  const mockedProvider = {
    getMovie: jest.fn().mockResolvedValue({
      data: {
        title: 'Ant-Man',
      },
      status: true,
    }),
    getPopularMovies: jest.fn(),
  };

  const TMDBProvider = new MovieService(mockedProvider);

  test("calls provider's getMovie method", () => {
    TMDBProvider.getMovie();
    TMDBProvider.getMovie();
    TMDBProvider.getMovie();

    expect(mockedProvider.getMovie).toHaveBeenCalled();
    expect(mockedProvider.getMovie).toHaveBeenCalledTimes(3);
  });

  test("calls provider's getPopularMovies method", () => {
    TMDBProvider.getPopularMovies();
    TMDBProvider.getPopularMovies();

    expect(mockedProvider.getPopularMovies).toHaveBeenCalled();
    expect(mockedProvider.getPopularMovies).toHaveBeenCalledTimes(2);
  })

  test('returns with the expected value', async () => {
    const { data, status } = await TMDBProvider.getMovie();

    expect(data.title).toBe('Ant-Man');
    expect(status).toBe(true);
  })
});
