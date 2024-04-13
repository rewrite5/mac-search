async function getMacVendor(MAC) {
  const url = "https://corsproxy.io/?" + encodeURIComponent(`https://macvendors.com/query/${MAC}`);
  const options = {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 12; M2101K7BNY Build/SP1A.210812.016) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 GNews Android/2022120654",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getMacVendor;
