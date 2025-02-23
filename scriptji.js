// Function to fetch a random quote from an API
async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

// Function to display the quote
async function displayQuote() {
  const quoteContainer = document.getElementById("quote");
  const authorContainer = document.getElementById("author");
  
  // Fetch a new quote
  const quoteData = await fetchQuote();
  
  // Update the DOM
  quoteContainer.textContent = `"${quoteData.content}"`;
  authorContainer.textContent = `- ${quoteData.author}`;
}

// Event listener for the button
document.getElementById("generate-btn").addEventListener("click", displayQuote);

// Display a quote when the page loads
window.onload = displayQuote;
