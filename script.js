
  const apiKey = "YOUR_API_KEY";

  function getTimezoneByAddress() {
    const liveAddress = document.getElementById("input-field").value;
    if (liveAddress) {
      fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
            liveAddress
        )}&apiKey=${apiKey}`
      )
        .then((resp) => resp.json())
        .then((result) => {
          if (result.features && result.features.length) {
            const properties = result.features[0].properties;

            const timezone = properties.timezone.name;
            document.getElementById("Tzone").innerHTML = `Name Of Time Zone: ${timezone}`;

            const offsetSTD = properties.timezone.offset_std;
            document.getElementById("Offset-STD").innerHTML = `Offset STD: ${offsetSTD}`;

            const offsetSTDSeconds = properties.timezone.offset_std_sec;
            document.getElementById("Offset-STD-Seconds").innerHTML = `Offset STD Seconds: ${offsetSTDSeconds}`;

            const offsetDST = properties.timezone.offset_dst;
            document.getElementById("Offset-DSt").innerHTML = `Offset DSt: ${offsetDST}`;

            const offsetDSTSeconds = properties.timezone.offset_dst_sec;
            document.getElementById("Offset-DST-Seconds").innerHTML = `Offset DST Seconds: ${offsetDSTSeconds}`;

            const country = properties.country;
            document.getElementById("Countryy").innerHTML = `Country: ${country}`;

            const postcode = properties.postcode;
            document.getElementById("Post-code").innerHTML = `Postcode: ${postcode}`;

            const city = properties.city;
            document.getElementById("cityy").innerHTML = `City: ${city}`;

            const latitude = result.features[0].geometry.coordinates[1];
            document.getElementById("lati").innerHTML = `Lat: ${latitude}`;

            const longitude = result.features[0].geometry.coordinates[0];
            document.getElementById("longi").innerHTML = `Long: ${longitude}`;


            document.getElementById("output").style.display = "none";
              } else {
                document.getElementById("output").innerHTML =
                  "No timezone information found for the entered address.";
              }
        })
        .catch((error) => {

          document.getElementById("output").innerHTML = `Error fetching timezone: ${error.message}`;
        });
    } else {
      document.getElementById("output").innerHTML = "Please enter an address!";
    }
  }















