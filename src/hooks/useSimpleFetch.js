import { useEffect, useState } from 'react';

export const useSimpleFetch = fetchFunction => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        const data = await fetchFunction();
        Array.isArray(data) ? setData(data) : setData([]);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, [fetchFunction]);

  return { data, error };
};
