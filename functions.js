document.querySelectorAll('.retro-tv').forEach(tv => {
  tv.addEventListener('click', () => {
    const episodeId = tv.dataset.episode;
    
    // 最初の画面を非表示にする
    document.querySelector('.intro-screen').style.display = 'none';
    document.querySelector('.content').style.display = 'block';

    // すべてのエピソードを非表示にする
    document.querySelectorAll('.episode').forEach(ep => {
      ep.style.display = 'none';
    });

    // 選ばれたエピソードのみを表示
    document.getElementById(episodeId).style.display = 'block';
  });
});

function goBack() {
  // 最初の画面を表示
  document.querySelector('.intro-screen').style.display = 'block';
  document.querySelector('.content').style.display = 'none';

  // すべてのエピソードを非表示にする
  document.querySelectorAll('.episode').forEach(ep => {
    ep.style.display = 'none';
  });

  // エピソード3とエピソード4を非表示に強制する
  document.getElementById('episode3').style.display = 'none';
  document.getElementById('episode4').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  

  // レトロテレビが左右に揺れるアニメーション
  gsap.to(".retro-tv", {
    rotation: 5,
    duration: 1,
    yoyo: true,
    repeat: -3,
    ease: "power1.inOut",
  });

  // 戻るボタンがホバーで拡大するアニメーション
  document.querySelectorAll(".back-button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.2, duration: 0.2 });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.2 });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const flowerContainer = document.querySelector(".falling-flowers");

  function createFlower() {
    const flower = document.createElement("img");
    flower.src = "images/151.png"; // 桜の花びら画像を指定
    flower.classList.add("falling-flower");

    // ランダムにサイズを設定 (30px ～ 50px)
    const size = Math.random() * 20 + 30;
    flower.style.width = `${size}px`;

    // 横位置をランダム化
    const position = Math.random() * window.innerWidth;
    flower.style.left = `${position}px`;

    // 高さをランダム化して上部にたまらないようにする
    const startHeight = Math.random() * -200 - 100;
    flower.style.top = `${startHeight}px`;

    // アニメーションの遅延と速度をランダム化
    const delay = Math.random() * 2;
    const duration = Math.random() * 5 + 5;

    flower.style.animationDelay = `${delay}s`;
    flower.style.animationDuration = `${duration}s`;

    // コンテナに追加
    flowerContainer.appendChild(flower);

    // アニメーション終了後に花びらを削除
    setTimeout(() => {
      flower.remove();
    }, (duration + delay) * 1000);
  }

  // 一定間隔で花びらを生成
  setInterval(createFlower, 300);
});


