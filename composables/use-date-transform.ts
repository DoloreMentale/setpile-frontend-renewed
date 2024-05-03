export const useDateTransform = (date: Date | string) => {
  const dateTransform = () => {
    const i = new Date(date);
    return i.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false });
  };

  return {
    dateTransform,
  };
};
