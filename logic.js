// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
//var database = ...
var config = {
    apiKey: "AIzaSyAB5zRBKOqOaP0g4HKgR94tVG4B9_dzb7A",
    authDomain: "proejct-15960.firebaseapp.com",
    databaseURL: "https://proejct-15960.firebaseio.com",
    projectId: "proejct-15960",
    storageBucket: "proejct-15960.appspot.com",
    messagingSenderId: "957116997644"
  };

firebase.initializeApp(config);

var database = firebase.database();


// // Initial Values
// var initialBid = 0;
// var initialBidder = "No one :-(";
// var highPrice = initialBid;
// var highBidder = initialBidder;

// --------------------------------------------------------------

// // At the initial load and subsequent value changes, get a snapshot of the stored data.
// // This function allows you to update your page in real-time when the firebase database changes.
// database.ref().on("value", function(snapshot) {

//   // If Firebase has a highPrice and highBidder stored (first case)
//   if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

//     // Set the variables for highBidder/highPrice equal to the stored values in firebase.
//     // highPrice = ...
//     // highBidder = ...
//     highBidder = snapshot.val().highBidder;
//     highPrice = snapshot.val().highPrice;


//     // Change the HTML to reflect the stored values
//     $("#highest-bidder").text(snapshot.val().highBidder);
//     $("#highest-price").text(snapshot.val().highPrice);

//     // Print the data to the console.
//     console.log(highBidder);
//     console.log(highPrice);


//   }

//   // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
//   else {

//     // Change the HTML to reflect the initial values
//     $("#highest-price").text("Victor");
//     $("#highest-bidder").text("0");

//     // Print the data to the console.


//   }


// // If any errors are experienced, log them to console.
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var employeeName = $( "#employee-name" ).val();
  var role = $( "#role" ).val();
  var startDate = $( "#start-date" ).val();
  var monthlyRate = $( "#montly-rate" ).val();

    // Alert
    alert("Your information has been succesfully added.");

    // Save the new price in Firebase
    database.ref().push(
  {
    employeeName: employeeName,
    role: role,
    startDate: startDate,
    monthsWorked: monthsWorked ,
    monthlyRate: monthlyRate,
    totalBilled: totalBilled,
    
  });

    // Log the new High Price

    console.log(employeeName);


    database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().employeeName);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startDate);
      console.log(childSnapshot.val().monthlyRate);


      // full list of items to the well
      $(".table").append("<tr class='well'><td id='name'> " + childSnapshot.val().employeeName +
        " </td><td id='email'> " + childSnapshot.val().role +
        " </td><td id='age'> " + childSnapshot.val().startDate +
        " </td><td id='comment'> " + childSnapshot.val().monthlyRate + " </span></tr>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      // Change the HTML to reflect
      $("#name-display").text(snapshot.val().name);
      $("#email-display").text(snapshot.val().email);
      $("#age-display").text(snapshot.val().age);
      $("#comment-display").text(snapshot.val().comment);
    });


    // dataRef.ref().on("child_added", function(childSnapshot)) {


    // });
    // $("#highest-bidder").text(snapshot.val().employeeName);
    // $("#highest-price").text(snapshot.val().role);
    // $("#highest-price").text(snapshot.val().role);


    // Store the new high price and bidder name as a local variable

    // // Change the HTML to reflect the new high price and bidder
    // $("#highest-bidder").text(snapshot.val().highBidder);
    // $("#highest-price").text(snapshot.val().highPrice);

});
