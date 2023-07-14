import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(url);
      try {
        setLoading(true);
        const res = await axios.get(import.meta.env.VITE_API_URL + url, {
          headers: {
            Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
          },
        });
        console.log(res);
        setData(res?.data.data);
      } catch (err) {
        setError(true);
        console.log("frtch", url);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
