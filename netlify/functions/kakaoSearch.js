const fetch = require("node-fetch");

exports.handler = async (e, context) => {
  const { query } = e.queryStringParameters;

  console.log("📦 [Function Start]");
  try {
    const encodedQuery = encodeURIComponent(query);

    console.log("query:", query);
    console.log("API KEY:", process.env.REACT_APP_KAKAO_API_KEY);
    console.log(
      "🌐 Request URL:",
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodedQuery}`
    );

    const res = await fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodedQuery}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
        },
      }
    );
    const data = await res.json();

    console.log("✅ API Response Received");

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("❌ Error occurred:", error.message || error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal Server Error" }),
    };
  }
};
