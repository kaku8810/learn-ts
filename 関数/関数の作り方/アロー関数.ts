type Human2 = {
  height: number;
  weight: number;
};
const calcBMI2 = ({ height, weight }: Human2): number => {
  return weight / height ** 2;
};
const kaku2: Human2 = { height: 1.83, weight: 70 };
console.log(calcBMI2(kaku2));
