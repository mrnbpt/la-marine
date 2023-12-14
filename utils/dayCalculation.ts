let today = new Date();
let date = String(today.getDate() + 1).padStart(2, "0");
let month = String(today.getMonth() + 1).padStart(2, "0");
let year = today.getFullYear();
let latestFormattedDate = `${year}-${month}-${date}`;

export default latestFormattedDate;
