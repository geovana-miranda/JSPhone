const URL = "https://economia.awesomeapi.com.br/json/available";
const coins = new Set();

export async function getAvailableCurrencies() {
  try {
    const res = await fetch(URL);
    const data = await res.json();

    Object.keys(data).map((par) => {
      const coin = par.slice(0, 3);
      coins.add(coin);
    });

    const coinsArray = Array.from(coins);

    return coinsArray;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchExchangeRate(coinFrom, coinTo) {
  const res = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${coinFrom}-${coinTo}`
  );
  const obj = `${coinFrom}${coinTo}`;
  const data = await res.json();
  const rate = data[obj].bid;
  return rate;
}
