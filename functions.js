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
    repeat: -1,
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

