function throttle(callback: Function, delay: number = 1000) {
  let timer: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(args);
      timer = null;
    }, delay);
  };
}

function debounce(callback: Function, delay: number = 1000) {
  let timer: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
}

export {
  throttle,
  debounce,
};
