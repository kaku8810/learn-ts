type Human = {
  height: number;
  weight: number;
};
const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2;
};
const kaku: Human = { height: 1.83, weight: 65 };
console.log(calcBMI(kaku));
