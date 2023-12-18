import { format, subDays } from "date-fns";

// const today = new Date();
// const latestFormattedDate = getUnixTime(today);

// const yyyy = today.getFullYear();
// const mm = String(today.getMonth() + 1).padStart(2, "0");
// const dd = String(today.getDate()).padStart(2, "0");
// const ddMinus7 = String(today.getDate() - 7).padStart(2, "0");
// const latestDate = `${yyyy}-${mm}-${dd}`;
// const dayMinusSeven = `${yyyy}-${mm}-${dd}`;

// export { latestDate, ddMinus7 };

const today = new Date();
const sevenDaysAgo = subDays(today, 7);

const todayFormatted = format(today, "yyyy-MM-dd");
const d7Formatted = format(sevenDaysAgo, "yyyy-MM-dd");

export { todayFormatted, d7Formatted };
