// Async/Await Example: Fetching a Random Chuck Norris Joke

// This function uses async/await to make an API request
const fetchData= async  ()=> {
    try {
      // Send a request to the API (this returns a Promise)
      let response = await fetch('https://api.chucknorris.io/jokes/random');
  
      // Convert the response to JSON format (also returns a Promise)
      let {created_at,value} = await response.json();
  
      //Print the date the joke was created
      console.log("Created at:", created_at);
  
      // Print the joke text
      console.log("Joke:", value);
    } catch (error) {
      // Catch and handle any errors (like network issues or bad responses)
      console.error("Error fetching data:", error);
    }
  }
  
  // Call the function to run it
  fetchData();
  

//   Assignment use async to 
// https://official-joke-api.appspot.com/random_joke