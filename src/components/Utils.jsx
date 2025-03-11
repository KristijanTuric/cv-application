export function dateToMonthYear(date) {
    if (date === "present") return "Present";

    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {month: "long", year: "numeric"});
};