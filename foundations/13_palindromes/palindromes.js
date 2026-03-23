const palindromes = function (str) {
  let rev = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
  let n = rev.length - 1;
  for (let i = 0; i < rev.length / 2; i++) {
    if (rev[i] !== rev[n - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
