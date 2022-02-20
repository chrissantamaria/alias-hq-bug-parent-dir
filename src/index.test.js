const { sum } = require('@utils/some-util');

describe('top-level tests', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should correctly sum', () => {
    expect(sum(1, 3)).toBe(4);
  });
});
