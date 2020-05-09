import { fizzbuzz } from '../src/functions'

describe('fizzbuzz', function() {
    it('fizzbuzz', function() {
        let actual = fizzbuzz();
        expect(actual).toBeInstanceOf(Array);
        expect(actual.length == 100);
        expect(actual[0]).toEqual('0');
        expect(actual[2]).toEqual('Fizz');
        expect(actual[4]).toEqual('Buzz');
        expect(actual[14]).toEqual('FizzBuzz');
    });
});