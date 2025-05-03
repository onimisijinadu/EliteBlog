import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortcont = new AbortController();
    fetch(url, { signal: abortcont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(
            `Could not fetch data from resource "Status: ${res.status}"`
          );
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Abort error");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortcont.abort();
  }, [url]);

  return { data, isPending, error };
}

// const abortCont = new AbortController();

// fetch(url, { signal: abortCont.signal })
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     setData(data);
//     setIsPending(false);
//     setError(null);
//   })
//   .catch((err) => {
//     if (err.name === "AbortError") {
//     } else {
//       setIsPending(false);
//       setError(err.message);
//     }
//   });

// return () => abortCont.abort();

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const json = await response.json();
//         setData(json);
//         setLoading(false);
//       } catch (e) {
//         setError(e);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// }

// export default useFetch;
