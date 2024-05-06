function generateHello() {
    const questions = [
      "Sabrina Robles",
      "Maximo Mayo",
      "Niran Abdulqader",
      "Jaranesca Braker",
      "Moncerrat Lua Salas",
      "Leslie Alvarado",
      "Guadalupe Argumendo",
      "Jesus Mimilia",
      "Abdikadir",
      "Alfi Ali",
      "Brett Spokes",
      "Daniel Solar",
      "Dante Angerame",
      "Kaaliyah Gray",
      "Kadi Barry",
      "Kayla Hanifen",
      "Rene Banuelos",
      "Uriel Delgado",
      "Victor Mata Castaneda",
      "Andrea Ceballos",
    ];

    const welcomeMessage = [
        "Howdy, ",
        "Hello, ",
        "Welcome, ",
        "I've been expecing you, ",
        "Introducing the one and only, ",
        "One whos name must not be spoken, ",
        "The legend themselves, ",
        "Hi, ",
        "The infamous, ",
        "Good day, "
    ];
  
    // Randomly select a question
    const index = Math.floor(Math.random() * questions.length);
    const index2 = Math.floor(Math.random() * welcomeMessage.length);
  
    document.getElementById("displayQuestion").innerHTML = `${welcomeMessage[index2]} ${questions[index]}`;
    // return questions[index];
  }

  function SayMyName(mysecretcode) { 

    let myname = document.getElementById("myName").value; 
  
    console.log(myname); 
  
    alert(`Hi ${myname} - ${mysecretcode}`); 
  
  } 

  //number1 and number2 are parameters
  function addNumbers(number1,number2){
    return number1 + number2;
  }

  function subNumbers(number1,number2){
    return number1 - number2;
  }

  function multNumbers(number1,number2){
    return number1 * number2;
  }

  function divNumbers(number1,number2){
    return number1 / number2;
  }
  // Example usage:
  console.log(addNumbers(2,4));

  function calculateAdd(){
    let number1 = Number(document.getElementById("numberOne").value);
    let number2 = Number(document.getElementById("numberTwo").value);
    let result = addNumbers(number1,number2);
    document.getElementById("result1").innerHTML = result;
  }

  function calculateSub(){
    let number1 = Number(document.getElementById("numberOne").value);
    let number2 = Number(document.getElementById("numberTwo").value);
    let result = subNumbers(number1,number2);
    document.getElementById("result1").innerHTML = result;
  }

  function calculateMult(){
    let number1 = Number(document.getElementById("numberOne").value);
    let number2 = Number(document.getElementById("numberTwo").value);
    let result = multNumbers(number1,number2);
    document.getElementById("result1").innerHTML = result;
  }

  function calculateDiv(){
    let number1 = Number(document.getElementById("numberOne").value);
    let number2 = Number(document.getElementById("numberTwo").value);
    let result = divNumbers(number1,number2);
    document.getElementById("result1").innerHTML = result;
  }
  