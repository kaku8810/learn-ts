function helloWorldNTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("Hello world!");
  }
}

helloWorldNTimes(5);

function helloWorldNTimes2(n: number): void {
  if (n >= 100) {
    console.log(`${n}回なんて無理ですよ！！`);
    return;
  }
  for (let i = 0; i < n; i++) {
    console.log("Hello world!");
  }
}

helloWorldNTimes2(150);
helloWorldNTimes2(5);
