
let inputDate = prompt("Tarixi YYYY.MM.DD formatında daxil edin:");

let year = inputDate.substring(0, 4);
let month = inputDate.substring(5, 7);
let day = inputDate.substring(8, 10);

let monthName;

if (month === "01") {
    monthName = "yanvar";
} else if (month === "02") {
    monthName = "fevral";
} else if (month === "03") {
    monthName = "mart";
} else if (month === "04") {
    monthName = "aprel";
} else if (month === "05") {
    monthName = "may";
} else if (month === "06") {
    monthName = "iyun";
} else if (month === "07") {
    monthName = "iyul";
} else if (month === "08") {
    monthName = "avqust";
} else if (month === "09") {
    monthName = "sentyabr";
} else if (month === "10") {
    monthName = "oktyabr";
} else if (month === "11") {
    monthName = "noyabr";
} else if (month === "12") {
    monthName = "dekabr";
}

let resultData = day + " " + monthName + " " + year + "-cu il";

console.log(resultData);
