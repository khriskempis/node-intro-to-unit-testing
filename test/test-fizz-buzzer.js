const expect = require('chai').expect

const fizzBuzzer = require('../fizzBuzzer')


describe('fizzBuzzer', function(){

	it('should return the appropriate words with the respective inputs', function(){


		const normalCases = [
			{a: 6, expected: 'fizz'},
			{a: 10, expected: 'buzz'},
			{a: 30, expected: 'fizz-buzz'}
		];

		normalCases.forEach(input => {
			const answer = fizzBuzzer(input.a)
			expect(answer).to.equal(input.expected);
		});

	});

	it('should throw an error when given a type thats not a number', function(){

		const badInputs = [
			{a: true}
			// {a: 'hello'},
			// {a: undefined}
		];

		badInputs.forEach(input => {
			// const answer = fizzBuzzer(input.a);
			expect(function(){
				fizzBuzzer(input.a); 
			}).to.throw(Error); 
		});
	});
});