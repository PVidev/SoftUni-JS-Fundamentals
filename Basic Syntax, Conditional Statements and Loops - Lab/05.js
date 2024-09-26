function printMonth(monthNumber) {
  let months = [
    "Error!",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    console.log("Error!");
  } else {
    console.log(months[monthNumber]);
  }
}

printMonth(2);
