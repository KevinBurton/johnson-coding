export function filterValuesByKeys(obj: object, filter: (key: string) => boolean): any[] {  // returns array
    return Object.entries(obj).filter(e => filter(e[0])).map(e => e[1]);
}
export function buildBoundDetector(lowerBound: number, upperBound: number): (n: number) => boolean {  // returns function
    return (n: number) => n >= lowerBound && n <= upperBound;
}
// Returns a function that uses closure to form the upper and lower bound for the test in the function returned
export function defaultMatrix(size: number): number[][] { // returns array
    // fix me!
	var defaultValue = 0;
	var row = [];
	var matrix = [];
	for (var i=0; i < size; i++) { row.push(defaultValue); }
	for (var i=0; i < size; i++) { matrix.push(row); }
	return matrix;
}
export function fizzbuzz(): string[] {
    let threeCounter: number = 0;
    let fiveCounter: number = 0;
    // Create an array with 100 elements then with 'map' fill the elements with
    // the appropriate string (multiples of three or five)
    return Array.apply(0, Array(100)).map((v, i) => { 
        threeCounter++;
        fiveCounter++;
        if(threeCounter == 3) {
            threeCounter = 0;
            if(fiveCounter == 5) {
                fiveCounter = 0;
                return 'FizzBuzz';
            }
            return 'Fizz';
        }
        if(fiveCounter == 5) {
            fiveCounter = 0;
            return 'Buzz';
        }
        return `${i}`; 
    });
}
export function customSort(input: number[]): number[] {
    input.sort((a,b) => a - b);
    return input;
}
export function dice(input: string): number {
    let re = new RegExp('\(\\d+\)d\(\\d+\)');
    let matches = re.exec(input);
    if(!matches) return 0;
    let n: number = Number(matches[1]);
    let s: number = Number(matches[2]);
    if(n < 1 || n >= 1000) return 0;
    if(s < 2 || s >= 100) return 0;
    let min: number = n;
    let max: number = n * s;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}