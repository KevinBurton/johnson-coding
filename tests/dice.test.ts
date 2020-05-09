import { dice } from '../src/functions'

describe('dice', function() {
    it('dice', function() {
        let actual = dice('1d6');
        expect(actual).toBeGreaterThanOrEqual(1);
        expect(actual).toBeLessThanOrEqual(6);
    });
});