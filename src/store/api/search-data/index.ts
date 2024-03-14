//   Function to fetch search results
export const fetchSearchResults = async() => {
  try {
    let response = await fetch(`https://itunes.apple.com/search?term=benson+boone&media=music`);

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}