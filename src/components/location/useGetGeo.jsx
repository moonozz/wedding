import { useState, useEffect } from "react";
import addressData from "../../data/data";

const useGetGeo = () => {
  const [geoData, setGeoData] = useState({ x: 0, y: 0 });
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const hallAddress = addressData.location.address;

  useEffect(() => {
    const fetchAddress = async () => {
      setLoading(true);
      setErr(null);

      try {
        const response = await fetch(
          `https://dapi.kakao.com/v2/local/search/address.json?query=${hallAddress}`,
          {
            method: "GET",
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
            },
          }
        );

        const data = await response.json();
        setLocationData(data);
        setGeoData({ x: data.documents[0].x, y: data.documents[0].y });
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, [hallAddress]);

  return { geoData, locationData, loading, err };
};

export default useGetGeo;
