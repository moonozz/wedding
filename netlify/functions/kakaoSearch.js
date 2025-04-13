const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { query } = event.queryStringParameters;

  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
        },
      }
    );
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
