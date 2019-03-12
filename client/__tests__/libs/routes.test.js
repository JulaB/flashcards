import apiUrl from 'libs/routes';

const API_BASE = '/api/v1';
describe('apiUrl creation', () => {
  it('returns correct apiUrl when endpoint is not defined', () => {
    expect(apiUrl()).toBe(API_BASE);
  });

  it('returns apiUrl when endpoint is started with slash', () => {
    expect(apiUrl('/search')).toBe(`${API_BASE}/search`);
  });

  it('returns apiUrl when endpoint is not started with slash', () => {
    expect(apiUrl('search')).toBe(`${API_BASE}/search`);
  });
});
