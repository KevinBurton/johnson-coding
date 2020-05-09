import { buildBoundDetector } from '../src/functions'

describe('buildBoundDetector', function() {
    it('buildBoundDetector', function() {
        let expected = true;
        let functionResponse = buildBoundDetector(1, 100);
        let actual = functionResponse(10);
        expect(actual).toEqual(expected);
    });
});