import { Country } from "./types";
export enum Sorting {
  None,
  Ascending,
  Descending,
}
export enum CountryOrRegion {
  Country,
  Region,
}
const sortAsending = (countries: Country[]) => {
  return countries.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });
};
export function sorting(countries: Country[], sortType: Sorting) {
  switch (sortType) {
    case Sorting.None:
      return countries;
    case Sorting.Ascending:
      return sortAsending(countries);
    case Sorting.Descending:
      return sortAsending(countries).reverse();
  }
}
export const findCountryByField = (
  countries: Country[],
  input: string,
  countryField: "name" | "region"
) => {
  return countries.filter(
    (countryObject) =>
      countryObject[countryField].toLowerCase() === input.toLowerCase()
  );
};
