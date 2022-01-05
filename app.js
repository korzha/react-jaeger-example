const collectorOptions = {
    url: "http://localhost:55681/v1/traces",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    concurrencyLimit: 10,
  };