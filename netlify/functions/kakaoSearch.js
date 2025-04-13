const fetch = require("node-fetch");

exports.handler = async (e, context) => {
  const { query } = e.queryStringParameters;

  try {
    const encodedQuery = encodeURIComponent(query);
    const res = await fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodedQuery}`,
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
      body: JSON.stringify({ error: error.message || "Internal Server Error" }),
    };
  }
};
