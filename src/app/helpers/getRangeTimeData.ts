import dayjs from "dayjs";
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export function getRangeTimeData(started: string, endded?: string) {
	const startDate = dayjs(started);
	const finalDate = endded ? dayjs(endded) : dayjs(new Date());

	const yearsDiff = finalDate.diff(startDate, "year");
	const monthStarted = dayjs(startDate).month() + 1;
	const monthEndded = dayjs(finalDate).month() + 1;
	const monthDiff = Math.abs(monthStarted - monthEndded);
	return yearsDiff === 0
		? `${String(monthDiff)}mos`
		: `${String(yearsDiff)}yr ${String(monthDiff)}mos`;
}
