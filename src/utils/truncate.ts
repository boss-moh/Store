export const truncateStr = (str: string, length: number) => {
  return str.length > length ? `${str.slice(0, length)} ...` : str;
};

export default truncateStr;
