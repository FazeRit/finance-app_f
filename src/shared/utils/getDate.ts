export interface DateParams {
  year: number;
  month: number;
}

export const getLastMonth = (date: Date = new Date()): DateParams => {
  const lastMonthDate = new Date(date);
  lastMonthDate.setMonth(date.getMonth() - 1);
  return {
    year: lastMonthDate.getFullYear(),
    month: lastMonthDate.getMonth() + 2,
  };
};
