import { defaultMatrix } from '../src/functions'

describe('defaultMatrix', function() {
    it('defaultMatrix', function() {
        let expected: number[][] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
        let actual = defaultMatrix(5);
        expect(actual).toEqual(expected);
        actual[0][0] = 5;
        expect(actual[0][0]).toEqual(5);
        expect(actual[1][0]).toEqual(0);
    });
});