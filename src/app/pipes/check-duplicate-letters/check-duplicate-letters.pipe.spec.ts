import { CheckDuplicateLettersPipe } from './check-duplicate-letters.pipe';

describe('CheckDuplicateLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckDuplicateLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
