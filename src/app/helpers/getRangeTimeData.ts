import dayjs from "dayjs";
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export function getRangeTimeData(start: string, end?: string) {
  const startDate = dayjs(start);
  const finalDate = end ? dayjs(end) : dayjs(new Date());

  const yearsDiff = finalDate.diff(startDate, "year");

  const adjustedStartDate = startDate.add(yearsDiff, "year");
  const monthsDiff = finalDate.diff(adjustedStartDate, "month");

  return yearsDiff === 0
    ? `${String(monthsDiff)}mos`
    : `${String(yearsDiff)}yr ${String(monthsDiff)}mos`;
}
