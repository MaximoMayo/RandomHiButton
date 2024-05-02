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
  
    // Randomly select a question
    const index = Math.floor(Math.random() * questions.length);
  
    document.getElementById("displayQuestion").innerHTML = `Hi ${questions[index]}`;
    // return questions[index];
  }
  
  // Example usage:
  let thequestion = generateIcebreaker();
  