export const getGameFieldParams = (level) => {
  if (level === 12) {
    return {cols: 4, rows: 3, size: '160px'};
  } else if (level === 16) {
    return {cols: 4, rows: 4, size: '160px'};
  } else if (level === 20) {
    return {cols: 5, rows: 4, size: '140px'};
  }
};
