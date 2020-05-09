import { defaultMatrix } from '../src/functions'

describe('defaultMatrix', function() {
    it('defaultMatrix', function() {
        let expected: number[][] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
        let actual = defaultMatrix(5);
        expect(actual).toEqual(expected);
    });
});