export function dateToMonthYear(date) {
    if (!date) return "Present";

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return "Present";

    return dateObj.toLocaleDateString("en-US", {month: "long", year: "numeric"});
};