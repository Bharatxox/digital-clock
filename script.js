const hour = document.querySelector(".h");
const min = document.querySelector(".m");
const sec = document.querySelector(".s");
const session = document.querySelector(".apm");

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let period = "AM"; // Default to AM

  if (hh > 12) {
    hh = hh - 12;
    period = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  hour.innerHTML = hh;
  min.innerHTML = mm;
  sec.innerHTML = ss;
  session.innerHTML = period;
}

// Use setInterval to repeatedly call currentTime every second
let time = setInterval(currentTime, 1000);

// document.addEventListener("DOMContentLoaded", function () {
//     let accessKey = "aK-nAo7OdXTdidKA5L2zxuIfI63-ZHl9-vfPyLAHUJ4";
//     let endpoint = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

//     function fetchAndUpdateImage() {
//         fetch(endpoint)
//             .then(response => response.json())
//             .then(data => {
//                 let imageIndex = Math.floor(Math.random() * data.length);
//                 let image = data[imageIndex];

//                 // Set the image as the background of the body
//                 document.body.style.backgroundImage = `url(${image.links.download}&w=1920&h=1080)`;
//             })
//             .catch(error => {
//                 console.error("Error fetching images:", error);
//             });
//     }

//     fetchAndUpdateImage();
//     setInterval(fetchAndUpdateImage, 1000); // Change the interval as needed
// });