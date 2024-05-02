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
  
  // Example usage:
  let thequestion = generateIcebreaker();
  