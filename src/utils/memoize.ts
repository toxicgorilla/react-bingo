export const memoize = (func: any) => {
  const cache: any = {};

  return (...args: any[]) => {
    let n = args[0];

    if (!(n in cache)) {
      cache[n] = func(...args);
    }

    return cache[n];
  };
};
