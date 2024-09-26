function printLanguageByCountry(country) {
  let countryLower = country.toLowerCase();

  if (countryLower === "england" || countryLower === "usa") {
    console.log("English");
  } else if (countryLower === "spain" || countryLower === "argentina" || countryLower === "mexico") {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}

printLanguageByCountry("USA");