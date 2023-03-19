export const getUserCountryViaService = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(
      `https://ipinfo.io/84.242.137.126?token=${process.env.REACT_APP_COUNTRY_SERVICE_TOKEN}`
    );
    const responseJson = await response.json();
    resolve(responseJson.country);
  });
};
