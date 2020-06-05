import assert = require('assert');
import { AuthGuard } from '../../src';

describe('auth.guard', () => {
  it('extracts jwt token from cookie', () => {
    let authGuard = new AuthGuard({} as any, {} as any);
    assert(authGuard.extractJwtFromCookie({}) === undefined);
    assert(authGuard.extractJwtFromCookie(undefined) === undefined);

    authGuard = new AuthGuard({} as any, { cookieKey: 'keycloakJWT' } as any);
    assert(
      authGuard.extractJwtFromCookie({
        keycloakJWT: '1234',
      }) === '1234',
    );
  });
});
