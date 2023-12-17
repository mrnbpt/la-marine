import getUnixTime from "date-fns/getUnixTime";

const today = new Date();
const latestFormattedDate = getUnixTime(today);

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const dayMinusSeven = `${yyyy}-${mm}-${dd}`;

export { latestFormattedDate, dayMinusSeven };
