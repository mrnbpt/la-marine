import { format, subDays } from "date-fns";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const sevenDaysAgo = subDays(tomorrow, 7);

const todayFormatted = format(tomorrow, "yyyy-MM-dd");
const d7Formatted = format(sevenDaysAgo, "yyyy-MM-dd");

export { todayFormatted, d7Formatted };
