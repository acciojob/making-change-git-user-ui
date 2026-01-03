const makeChange = (c) => {
  c = Number(c); // prompt gives string

  const result = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  // Quarters
  result.q = Math.floor(c / 25);
  c = c % 25;

  // Dimes
  result.d = Math.floor(c / 10);
  c = c % 10;

  // Nickels
  result.n = Math.floor(c / 5);
  c = c % 5;

  // Pennies
  result.p = c;

  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
