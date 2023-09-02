import { NumberAsEuroPipe } from './number-as-euro.pipe';

describe('NumberAsEuroPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberAsEuroPipe();
    expect(pipe).toBeTruthy();
  });
});
