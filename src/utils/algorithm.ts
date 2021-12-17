function calcDiff(nPos: number = 500, maxLength: number = 15, initDiff: number = 1000, alpha: number = 0.01, diff: Array<number>, start: number) {
  diff[start] = initDiff;
  for (let i = start - 1; i >= 0; --i) {
    const delta = Math.min(start - i, maxLength);
    diff[i] -= (diff[i] - diff[i + 1]) * (1 - alpha * delta);
  }
  for (let i = start + 1; i < nPos; ++i) {
    const delta = Math.min(i - start, maxLength);
    diff[i] -= (diff[i] - diff[i - 1]) * (1 - alpha * delta);
  }
  return diff;
}

function sin(x: number, w: number = 1, theta: number = 0, a: number = 1) {
  return a * Math.sin(w * x + theta);
}

export {
  calcDiff,
  sin,
};
