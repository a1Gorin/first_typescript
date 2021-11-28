

import dotenv from 'dotenv'
const get_square = (a: number, b: number): number => {
	return a * b 
}
dotenv.config();
const string_a = process.env.a;
const string_b = process.env.b
const a = parseInt(string_a, 10);
const b = parseInt(string_b, 10);
if (isNaN(a) || isNaN(b)) {
  throw new Error(`Не могу превратить значение ${string_a} в число`);
  throw new Error(`Не могу превратить значение ${string_b} в число`);
}

if (a <= 0 || b <= 0) {
  throw new Error('Длина и ширина прямоугольника должны быть больше нуля');
}


const square = get_square(a,b)
console.log(`Площадь прямоугольника длиной ${a} и шириной ${b} равна ${square}`)
console.log(square)
