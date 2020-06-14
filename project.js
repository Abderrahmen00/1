var firebaseConfig = {
    apiKey: "AIzaSyBkz8K-jt625-3wOi0Tr-DAb2y8BWu3NHw",
    authDomain: "laisse-tomber.firebaseapp.com",
    databaseURL: "https://laisse-tomber.firebaseio.com",
    projectId: "laisse-tomber",
    storageBucket: "",
    messagingSenderId: "738203333580",
    appId: "1:738203333580:web:e98273b8d3e8c93b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('laisse');
  function submitForm(){
      event.preventDefault();
      // Get values
      var firstname=document.getElementById('defaultRegisterFormFirstName').value;
      var lastname=document.getElementById('defaultRegisterFormLastName').value;
      var email=document.getElementById('defaultRegisterFormEmail').value;
      var password=document.getElementById('defaultRegisterFormPassword').value;
      saveMessage(firstname,lastname,email,password);
  } 

function saveMessage(firstname,lastname,email,password){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    });
}

