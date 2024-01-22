import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            //console.log(res);
            throw Error("Could not fetch data for that resource"); /*if no res*/
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  return {
    data,
    isPending,
    error,
  }; /*returning these properties so it is usable*/
};

export default useFetch;
