// Python（Colab）側のAPIのURL
const API_BASE = "https://profit-friend-worldcat-bring.trycloudflare.com";
const res = await fetch(API_BASE + "/api/reserve", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});
