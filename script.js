(function(){var c=document.querySelector(".petals");if(!c)return;for(var i=0;i<12;i++){var p=document.createElement("span");p.className="petal";p.style.left=Math.random()*100+"%";p.style.animationDuration=8+Math.random()*10+"s";p.style.animationDelay=Math.random()*6+"s";var s=6+Math.random()*6;p.style.width=s+"px";p.style.height=s+"px";c.appendChild(p)}var btn=document.getElementById("btnHeart"),rain=document.getElementById("heartRain");if(!btn||!rain)return;var hearts=["💗","💕","💖","❤️","🤍"];btn.addEventListener("click",function(){for(var j=0;j<8;j++)(function(index){setTimeout(function(){var h=document.createElement("span");h.className="floating-heart";h.textContent=hearts[Math.floor(Math.random()*hearts.length)];h.style.left=20+Math.random()*60+"%";h.style.bottom="15%";rain.appendChild(h);setTimeout(function(){h.parentNode&&h.parentNode.removeChild(h)},2600)},index*80)})(j)})})();
// 花瓣飘落效果
const petalsContainer = document.querySelector('.petals');
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + '%';
  petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
  petal.style.animationDelay = Math.random() * 5 + 's';
  petalsContainer.appendChild(petal);
}
for (let i = 0; i < 15; i++) {
  createPetal();
}

// 爱心点击效果 + 音乐播放
const btnHeart = document.getElementById('btnHeart');
const heartRain = document.getElementById('heartRain');
const bgMusic = document.getElementById('bgMusic');

btnHeart.addEventListener('click', () => {
  // 播放音乐
  bgMusic.play().catch(err => console.log('播放失败：', err));

  // 生成爱心雨
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + '%';
      heartRain.appendChild(heart);
      setTimeout(() => heart.remove(), 2500);
    }, i * 100);
  }
});
