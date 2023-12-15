import getUnixTime from "date-fns/getUnixTime";

const today = new Date();
// let date = String(today.getDate() + 1).padStart(2, "0");
// let month = String(today.getMonth() + 1).padStart(2, "0");
// let year = today.getFullYear();
// let latestFormattedDate = `${year}-${month}-${date}`;
const latestFormattedDate = getUnixTime(today);

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const dayMinusSeven = `${yyyy}-${mm}-${dd}`;

export { latestFormattedDate, dayMinusSeven };
