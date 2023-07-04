import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../redux/countriesSlice';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();
  const { stats } = useParams();
  useEffect(() => {
    dispatch(fetchCountries(stats));
  }, [dispatch]);

  return (
    <div className="grid">
      {countries.map((country) => (
        <div key={country.id}>
          <span>{country.flag}</span>
          <span>{country.name}</span>
          <img height={80} width={60} src={country.emblem} alt="" />
          <span>{country.population}</span>
          <span>{country.timezone}</span>
        </div>
      ))}
    </div>
  );
};

export default Countries;
