import { Country } from 'country-state-city';

export const getAllCountries = () =>
  Country?.getAllCountries()?.map((country, index) => (
    <option key={index} value={country?.name}>
      {country?.name}
    </option>
  ));
