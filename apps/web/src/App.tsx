import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { CitiesResponse, CityFactsResponse, CityWithCount, Fact } from '@travel-facts/shared';
import { CityInput } from './components/CityInput';
import { FactsDisplay } from './components/FactsDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';

function App() {
  const [cities, setCities] = useState<CityWithCount[]>([]);
  const [cityInput, setCityInput] = useState<string>('');
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [selectedCityName, setSelectedCityName] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [factsLoading, setFactsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('/api/cities')
      .then(res => res.json())
      .then((data: CitiesResponse) => {
        setCities(data.cities);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch cities:', err);
        setLoading(false);
      });
  }, []);

  const handleCitySubmit = () => {
    if (!cityInput.trim()) return;

    setError('');
    const city = cities.find(c => c.name.toLowerCase() === cityInput.trim().toLowerCase());

    if (!city) {
      setError('City not found. Try Venice, Paris, or Tokyo.');
      return;
    }

    setFactsLoading(true);
    setSelectedCityId(city.id);
    setSelectedCityName(city.name);

    fetch(`/api/cities/${city.id}/facts`)
      .then(res => res.json())
      .then((data: CityFactsResponse) => {
        setFacts(data.facts);
        setFactsLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch facts:', err);
        setFactsLoading(false);
        setError('Failed to load facts. Please try again.');
      });
  };

  const handleBack = () => {
    setSelectedCityId(null);
    setFacts([]);
    setSelectedCityName('');
    setCityInput('');
    setError('');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AnimatePresence mode="wait">
        {!selectedCityId ? (
          <CityInput
            cityInput={cityInput}
            onCityInputChange={setCityInput}
            onSubmit={handleCitySubmit}
            error={error}
          />
        ) : (
          <FactsDisplay
            cityName={selectedCityName}
            facts={facts}
            loading={factsLoading}
            onBack={handleBack}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
