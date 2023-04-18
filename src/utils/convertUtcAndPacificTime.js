export function convertUtcAndPacificTime(dateTime) {
  var newDateTime = new Date(dateTime);
  var utcHours = newDateTime.getUTCHours();
  utcHours = JSON.stringify(utcHours);
  if (utcHours.length == 1) utcHours = "0" + utcHours;

  // console.log("newDateTime", newDateTime.getUTCFullYear() + "-" + (newDateTime.getUTCMonth() + 1) + "-" + newDateTime.getUTCDate() + " " + utcHours + ":" + newDateTime.getUTCMinutes() + ":" + "00");

  var utc = new Date(
    newDateTime.getUTCFullYear() +
      "-" +
      (newDateTime.getUTCMonth() + 1) +
      "-" +
      newDateTime.getUTCDate() +
      " 0" +
      utcHours +
      ":" +
      newDateTime.getUTCMinutes() +
      ":" +
      "00"
  );
  utc = new Date(utc.setHours(utc.getHours() - 8));

  //   var formatedTime = utc.replace(/T|Z/g, "");
  return utc;
}
