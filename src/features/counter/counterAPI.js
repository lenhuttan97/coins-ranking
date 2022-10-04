// A mock function to mimic making an async request for data
const myHeaders = new Headers();
myHeaders.append("x-access-token", "coinrankingae9ed0fe5781b0fef18c7b9e78f9d18dd76307a6ee3a1603");
myHeaders.append("Content-type", "'application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export function fetchCount<T>(offset: Number = 0, limit: Number = 50): Promise<T> {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins?offset=' + offset + '&limit=' + limit, requestOptions
  ).catch((error) => {
    console.log(error);
  })
}


