export const toStringOperation = (str) => {
  return {
    '*': 'mult',
    '+': 'add',
    '-': 'sub',
    '/': 'div'
  }[str];
};
