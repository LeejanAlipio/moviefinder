import TMDBProvider from '../src/modules/tmdbProvider.js';

describe('test fecth api dependency', () => {
  let provider = new TMDBProvider('api-key-test');

  beforeEach(() => {
    jest.restoreAllMocks();
    provider = new TMDBProvider('api-key-test');
  })

  test('fetch api is called', async () => {
    const expectedData = {
      data: {
        title: 'pogiako123',
      }
    }

    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        data: {
          title: 'pogiako123'
        }
      }),
    })

    await expect(provider.getMovie("pogiako123")).resolves.toEqual(expectedData);
  })
})