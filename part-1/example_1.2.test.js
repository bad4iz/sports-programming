import example from './example_1.2';

describe('Example_1.2 n = 3', () => {
  const n = 3;

  it('test 1 el', () => {
    const expected = '1 2 3';
    expect(example({ n })[0]).toEqual(expected);
  });
  it('test 4 el', () => {
    const expected = '2 3 1';
    expect(example({ n })[3]).toEqual(expected);
  });
  it('test 6 el', () => {
    const expected = '3 2 1';
    expect(example({ n })[5]).toEqual(expected);
  });
});

describe('Example_1.2 2.9.2 n = 7', () => {
  const n = 7;

  it('test 4468 el', () => {
    const expected = '7 2 3 1 5 6 4';
    expect(example({ n })[4467]).toEqual(expected);
  });
  it('test 4 el', () => {
    const expected = '1 2 3 4 6 7 5';
    expect(example({ n })[3]).toEqual(expected);
  });
  it('test 6 el', () => {
    const expected = '1 2 3 4 7 6 5';
    expect(example({ n })[5]).toEqual(expected);
  });
});
