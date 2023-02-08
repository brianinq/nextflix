const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `${baseUrl}/discover/movie?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchAction: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=28`,
  fetchComedy: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=35`,
  fetchHorror: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=27`,
  fetchRomance: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=99`,
};
//ACHRD 28, 35, 27, 10749, 99
export default requests;
