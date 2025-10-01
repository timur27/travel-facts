import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Travel Facts
        </h1>
        <p className="text-gray-600">
          API Status: <span className="font-mono">{status || 'loading...'}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
