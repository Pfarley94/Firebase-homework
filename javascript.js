  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDeMWIuTJb1Cq9-Xi-MELPDfvxk8P2e9ZU",
    authDomain: "test-f9b2a.firebaseapp.com",
    databaseURL: "https://test-f9b2a.firebaseio.com",
    projectId: "test-f9b2a",
    storageBucket: "test-f9b2a.appspot.com",
    messagingSenderId: "9982049599"
  };
  firebase.initializeApp(config);
  
  var name = "";
  var destination = "";
  var firstTrainTime = "";
  var Frequency = "";
  
  var database = firebase.database();
  
   $("#sub-btn").on("click", function(event) {
        event.preventDefault();
  
    name = $("#inputTrainName").val().trim();
    destination = $("#inputDestination").val().trim();
    firstTrainTime = $("#inputFirstTrainTime").val().trim();
    Frequency = $("#inputFrequency").val().trim();
        
        database.ref().push({
          name: name,
          destination: destination,
          firstTrainTime: firstTrainTime,
          Frequency: Frequency,
          firstTrainTimeAdded: firebase.database.ServerValue.TIMESTAMP
        });
  
        
       var viewName = $("#display-name").text(name);    
       var viewdestination = $("#display-destination").text(destination);
       var viewfirstTrainTime = $("#display-firstTrainTime").text(firstTrainTime);
      //  $("#display-months").text();
      var viewFrequency =  $("#display-Frequency").text(Frequency);
      //  $("#display-billed").text();
      var tRow = $("tr")
      var tBody = $("tbody")
      
            });
