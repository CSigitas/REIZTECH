import { Country } from "./types";

const apiUrl = "https://restcountries.com/v2/all?fields=name,region,area";
export const fetchAllCountries = () => {
  return fetch(apiUrl).then((resp) => resp.json() as unknown as Country[]);
};
