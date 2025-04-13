import { useState, useEffect } from "react";
import addressData from "../../data/data";

const useGetGeo = () => {
  const [geoData, setGeoData] = useState({ x: 0, y: 0 });
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const hallAddress = addressData.location.address;

  // const url = `${PROXY}/v2/local/search/address.json?query=${hallAddress}`;

  // useEffect(() => {
  //   const fetchAddress = async () => {
  //     setLoading(true);
  //     setErr(null);

  //     try {
  //       const response = await fetch(
  //         url,
  //         // `https://dapi.kakao.com/v2/local/search/address.json?query=${hallAddress}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
  //           },
  //         }
  //       );

  //       const data = await response.json();
  //       setLocationData(data);
  //       setGeoData({ x: data.documents[0].x, y: data.documents[0].y });
  //       console.log("성공", data.documents[0].x, data.documents[0].y);
  //     } catch (err) {
  //       setErr(err);
  //       console.log("err", err, url);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAddress();
  // }, [hallAddress]);

  useEffect(() => {
    const fetchAddress = async () => {
      setLoading(true);
      setErr(null);

      const isLocal = window.location.hostname === "localhost";
      const baseURL = isLocal
        ? "https://dapi.kakao.com/v2/local/search/address.json"
        : "/proxy/v2/local/search/address.json";

      const url = `${baseURL}?query=${encodeURIComponent(hallAddress)}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers:
            window.location.hostname === "localhost"
              ? {
                  Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
                }
              : {},
        });

        const data = await response.json();
        setLocationData(data);
        setGeoData({ x: data.documents[0].x, y: data.documents[0].y });
        console.log("성공", data.documents[0].x, data.documents[0].y);
      } catch (err) {
        setErr(err);
        console.log("err", err, url);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, [hallAddress]);

  // useEffect(() => {
  //   const fetchAddress = async () => {
  //     setLoading(true);
  //     setErr(null);

  //     try {
  //       const res = await fetch(
  //         `/api/search-address?query=${encodeURIComponent(hallAddress)}`
  //       );
  //       const data = await res.json();
  //       setLocationData(data);
  //       setGeoData({ x: data.documents[0].x, y: data.documents[0].y });
  //       console.log("성공", data.documents[0].x, data.documents[0].y);
  //     } catch (err) {
  //       setErr(err);
  //       console.log("err", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchAddress();
  // }, [hallAddress]);

  return { geoData, locationData, loading, err };
};

export default useGetGeo;
