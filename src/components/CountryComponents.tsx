import { Country } from "../types";
import "./CountryComponents.css";
interface countryComponentsProps {
  country: Country;
  index: number;
}

const CountryComponents: React.FC<countryComponentsProps> = ({
  index,
  country,
}) => {
  return (
    <div className="CountryComponents">
      <p>{index + 1}.</p>
      <p>Country: {country.name}</p>
      <p>Region: {country.region}</p>
      <p>Area: {country.area}</p>
    </div>
  );
};
export default CountryComponents;
