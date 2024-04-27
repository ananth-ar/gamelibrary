const baseUrl =
  "https://api.rawg.io/api/games?key=";

function buildQueryParams(obj) {
  return Object.entries(obj)
    .filter(([key, value]) => value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

export async function getGames(page, yourdata) {
  let queryParamsString = buildQueryParams(yourdata);

  let finalUrl =
    baseUrl +
    (queryParamsString ? `&${queryParamsString}` : "") +
    `&page=${page}`;

  const resp = await fetch(finalUrl);
  const resData = await resp.json();
  return resData.results;
}

export async function getGameDetails(slug ) {
  const gameDetails = {};

  const details = await fetch(
    `https://api.rawg.io/api/games/${slug }?key=cbf8f5e643db454e887cdf19df361a64`
  );
  gameDetails.details = await details.json();

  const series = await fetch(
    `https://api.rawg.io/api/games/${slug }/game-series?key=cbf8f5e643db454e887cdf19df361a64`
  );
  gameDetails.series = await series.json();

  const additions = await fetch(
    `https://api.rawg.io/api/games/${slug }/additions?key=cbf8f5e643db454e887cdf19df361a64`
  );
  gameDetails.additions = await additions.json();

  const screenshots = await fetch(
    `https://api.rawg.io/api/games/${slug }/screenshots?key=cbf8f5e643db454e887cdf19df361a64`
  );
  gameDetails.screenshots = await screenshots.json();

  const stores = await fetch(
    `https://api.rawg.io/api/games/${slug }/stores?key=cbf8f5e643db454e887cdf19df361a64`
  );
  gameDetails.stores = await stores.json();

  const movies = await fetch(
    `https://api.rawg.io/api/games/${slug }/movies?key=cbf8f5e643db454e887cdf19df361a64`
  );
  gameDetails.movies = await movies.json();

  return gameDetails;
}

