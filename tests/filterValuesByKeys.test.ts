import { filterValuesByKeys } from '../src/functions'

describe('filterValuesByKeys', function() {
    it('filterValuesByKeys', function() {
        let o = { a: '1', b: '2', c: '3' };
        let expected = [ '2' ];
        let actual = filterValuesByKeys(o, (k) => k == 'b');
        expect(actual).toEqual(expected);
    });
});