const calculateDate = (string: string) =>
  string
    .slice(0, 10)
    .split('-')
    .map((item, index) => {
      if (index === 0) return `${item}년`;
      if (index === 1) return ` ${item}월`;
      return ` ${item}일`;
    });

export default calculateDate;
