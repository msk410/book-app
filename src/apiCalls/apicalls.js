import axios from "axios";

export function fetchData(url) {
  return axios
    .get(url)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}
