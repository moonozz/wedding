import { useState, useEffect } from "react";
import addressData from "../../data/data";

const useGetGeo = () => {
  const [geoData, setGeoData] = useState(null);
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
        setGeoData(data);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
    // console.log(geoData.documents[0]);
    console.log(geoData);
  }, [hallAddress]);

  return { geoData, loading, err };
};

export default useGetGeo;
