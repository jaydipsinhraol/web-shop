import { AuthDecorator } from './auth.decorator';

describe('AuthDecorator', () => {
  it('should be defined', () => {
    expect(new AuthDecorator()).toBeDefined();
  });
});
