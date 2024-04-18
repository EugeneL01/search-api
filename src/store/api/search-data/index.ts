// let searchData: any = [];

// export const setSearchData = (data : any) => {
//   searchData = data;
//   // console.log(searchData, "searchData")
// };

// export const getSearchData = () => {
//   return searchData;
// };

export const fetchSearchResults = async (term: any) => {
  try {
    let response = await fetch(
      `https://itunes.apple.com/search?term=${term + "&media=music"}`
    );

    const data = await response.json();
    // setSearchData(data.results);

    console.log(data);

    return data.results;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
