const broadCast = (weatherReport) => {
  weatherReport();
};

const announceRain = () => {
  console.log("Grab an umbrella. It's going to rain today.");
};

const announceClear = () => {
  console.log(
    "Grab your shades and sunscreen. It's going to be sunny and hot today."
  );
};

const weatherStation = (humidity) => {
  if (humidity > 95) {
    broadCast(announceRain);
  } else {
    broadCast(announceClear);
  }
};

weatherStation(96);
weatherStation(50);
