import { useEffect, useState } from 'react';

export function useFetch(url) {
     const [data, setData] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [error, setError] = useState(false);

     useEffect(() => {
          if (!url) return;

          setIsLoading(true);

          async function fetchData() {
               try {
                    const response = await fetch(url);

                    const dataResponse = await response.json();

                    setData(dataResponse);
               } catch (error) {
                    console.log(error);
                    setError(true);
               } finally {
                    setIsLoading(false);
               }
          }
          fetchData().then((r) => r);
     }, [url]);

     return { isLoading, data, error };
}
