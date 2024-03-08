import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

export default function ISSTracker() {
  const URL = "https://api.wheretheiss.at/v1/satellites/25544";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading, isValidating } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  /* const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  }); */

  /*async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  } */

  /* useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []); */

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        //onRefresh={getISSCoords}
      />
    </main>
  );
}
