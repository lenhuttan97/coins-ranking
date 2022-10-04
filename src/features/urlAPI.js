// A mock function to mimic making an async request for data
// const myHeaders = new Headers();
// myHeaders.append("x-access-token", "coinrankingae9ed0fe5781b0fef18c7b9e78f9d18dd76307a6ee3a1603");
// myHeaders.append("Content-type", "application/json");
// myHeaders.append("Access-Control-Allow-Origin", "*");

const requestOptions = {
  method: 'GET',
  headers:  {
    "x-access-token": "coinrankingae9ed0fe5781b0fef18c7b9e78f9d18dd76307a6ee3a1603",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  redirect: 'follow'
};

export function fetchCoins(offset) {
  console.log(offset);
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins?offset=' + offset + '&limit=50', requestOptions
  ).catch((error) => {
    console.log(error);
  })
}


export function sortCoins(order) {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins?orderBy='+order.order+'&orderDirection='+order.direction, requestOptions
  ).catch((error) => {
    console.log(error);
  })
}


export function searchCoins(seach) {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins?search='+seach, requestOptions
  ).catch((error) => {
    console.log(error);
  })
}


export function getAPICoinDetail(uuid) {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coin/'+uuid, requestOptions
  ).catch((error) => {
    console.log(error);
  })
}


