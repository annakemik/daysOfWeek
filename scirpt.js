const week = [
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thurdsay",
  "Friday",
  "Saturday",
  "Sunday",
];

week.forEach(function (day, index) {
  const today = new Date().getDay();
  if (index == today - 1) {
    console.log("%c" + day, "font-weight: bold");
  } else if (day !== "Saturday" && day !== "Sunday") {
    console.log(day);
  } else {
    console.log("%c" + day, "font-style: italic");
  }
});
