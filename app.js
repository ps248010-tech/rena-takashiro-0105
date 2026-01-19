// Python（Colab）側のAPIのURL
const API_BASE = "https://profit-friend-worldcat-bring.trycloudflare.com";

// ページが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#reservationForm");
  if (!form) return; // フォームが無いページでは何もしない

  // フォーム送信時の処理
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 通常の送信を止める

    // 入力値をまとめる（data を作る）
    const data = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      date: document.querySelector("#date").value,
      payment: document.querySelector('input[name="payment"]:checked').value,
      message: document.querySelector("#message").value
    };

    try {
      // Python（Colab）のAPIへ送信
      const res = await fetch(API_BASE + "/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = await res.json();

      if (json.ok) {
        // 成功したら完了ページへ
        window.location.href = "reservation-done.html";
      } else {
        alert("予約に失敗しました");
      }
    } catch (error) {
      alert("通信に失敗しました。Colabが起動しているか確認してください。");
      console.error(error);
    }
  });
});

