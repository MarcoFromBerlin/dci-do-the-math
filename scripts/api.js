// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// // request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
// request.open(
//   "GET",
//   "https://api.thecatapi.com/v1/images/?limit=10&page=0&order=DESC&",
//   true
// );
// // throws back error: CORS header ‘Access-Control-Allow-Origin’ is ‘*’
// // request.withCredentials = true;
// request.setRequestHeader("Content-Type", "application/json");

// request.setRequestHeader("x-api-key", "17d94b92-754f-46eb-99a0-65be65b5d18f");
// // request.setRequestHeader("x-api-key", "e856f8ad-7b46-4dcb-8412-813d667e3204");
// // request.send({ request: "authentication token" });

// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   //   var data = JSON.parse(this.response);
//   console.log(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((movie) => {
//       console.log(movie.title);
//     });
//   } else {
//     console.log("error");
//   }
// };

// // Send request
// request.send();

// // var http_request;
// // http_request = new XMLHTTPRequest();
// // http_request.onreadystatechange = function () {
// //   /* .. */
// // };
// // http_request.open("POST", "https://sso.moxio.com");
