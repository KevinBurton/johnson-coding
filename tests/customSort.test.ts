import { customSort } from '../src/functions'

describe('customSort', function() {
    it('customSort', function() {
        let expected = [1,2,3,4,5,6,7,8,9,10];
        let actual = customSort([5,1,3,2,4,6,10,7,8,9]);
        expect(actual).toBeInstanceOf(Array);
        expect(actual.length).toEqual(expected.length);
        expect(actual).toEqual(expected);
    });
});