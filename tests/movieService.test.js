import MovieService from '../src/service/movieService.js';

describe("uses provider's method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    TMDBProvider.getMovie('Ant-Man');
    TMDBProvider.getMovie('Ant-Man');
    TMDBProvider.getMovie('Ant-Man');

    expect(mockedProvider.getMovie).toHaveBeenCalled();
    expect(mockedProvider.getMovie).toHaveBeenCalledTimes(3);
  });

  test("calls provider's getPopularMovies method", () => {
    TMDBProvider.getPopularMovies();
    TMDBProvider.getPopularMovies();

    expect(mockedProvider.getPopularMovies).toHaveBeenCalled();
    expect(mockedProvider.getPopularMovies).toHaveBeenCalledTimes(2);
  });

  test('returns with the expected value', async () => {
    const { data, status } = await TMDBProvider.getMovie('Ant-Man');

    expect(data.title).toBe('Ant-Man');
    expect(status).toBe(true);
  });

  test('throw an error if title is blank', () => {
    expect(async () => await TMDBProvider.getMovie('')).rejects.toThrow("Title must not be blank!");
  });
});
