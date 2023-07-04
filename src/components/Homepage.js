import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCountries } from '../redux/countriesSlice';

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleRegion = (region) => {
    setSelectedRegion(region);
    dispatch(fetchCountries(region));
    navigate(`/countries/${region}`);
  };

  return (
    <>
      <div>

        <section value={selectedRegion} className="grid">
          <button
            type="button"
            key="europe"
            onClick={() => handleRegion('europe')}
          >
            Europe
          </button>
          <button
            type="button"
            key="south america"
            onClick={() => handleRegion('south america')}
          >
            South America
          </button>
          <button
            type="button"
            key="north america"
            onClick={() => handleRegion('north america')}
          >
            North America
          </button>
          <button type="button" key="asia" onClick={() => handleRegion('asia')}>
            Asia
          </button>
          <button
            type="button"
            key="africa"
            onClick={() => handleRegion('africa')}
          >
            Africa
          </button>
          <button
            type="button"
            key="antarctic"
            onClick={() => handleRegion('antarctic')}
          >
            Antarctic
          </button>
          <button
            type="button"
            key="oceania"
            onClick={() => handleRegion('oceania')}
          >
            Oceania
          </button>
        </section>
      </div>
    </>
  );
};
export default Homepage;
