const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v2/shop?lang=ru';

const getDailyShop = async function getFn() {
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': API_KEY
    }
  });
  const result = await response.json();
  return result.shop;
};

export default getDailyShop;
