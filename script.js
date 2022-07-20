const buttonIntro = document.getElementById('embarque');
const welcome = document.getElementById('welcome');
const procurados = document.querySelectorAll('li');
const nav = document.getElementById('menu')
const containerPlaylist = document.getElementsByClassName('container-playlist')[0];
const characterPics = document.getElementById('character-pics')

const personagens = {
  luffy: {
    imagens: [
      "https://i.pinimg.com/564x/9a/44/17/9a4417c0a72bbb49b163571ef3d44437.jpg",
      "https://i.pinimg.com/564x/e6/53/f5/e653f5856363e782fc384c35b97a49d1.jpg",
      "https://i.pinimg.com/564x/08/06/1f/08061fae23095cdd59835ccfe9466dd4.jpg",
      "https://i.pinimg.com/564x/1e/d7/a6/1ed7a6fad41c2a97ed3da47f55ca3905.jpg"
    ],
    // playlist: [
    //   <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7oqE5MJp3kv1YwtWmI6v4n?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    // ]
  },
  zoro: {
    imagens: [
      "https://i.pinimg.com/236x/62/e1/cd/62e1cdb555334421067b2c745a88962e.jpg",
      "https://i.pinimg.com/236x/5f/d3/f9/5fd3f92307c17ac1598ef04936a035d1.jpg",
      "https://i.pinimg.com/236x/6a/d7/cf/6ad7cf9a272ad4b90d12df140848c757.jpg",
      "https://i.pinimg.com/236x/c5/a9/4e/c5a94e7d52921da75fdb0b40ffb00e72.jpg"
    ],
  },
  nami: {
    imagens: [
      "https://i.pinimg.com/236x/4e/3c/ef/4e3cefc068fac6f05af4fcaafad01c15.jpg",
      "https://i.pinimg.com/236x/07/e2/2b/07e22b52daa84d5f5e843947430bea5e.jpg",
      "https://i.pinimg.com/236x/38/3a/cc/383acc2414f435f5ea31cf5fe9014633.jpg",
      "https://i.pinimg.com/236x/13/67/09/136709f332dad9027cd00e3f4956235f.jpg"
    ],
  },
  usopp: {
    imagens: [
      "https://i.pinimg.com/736x/c8/eb/58/c8eb58645a773bfea2cd210066273573.jpg",
      "https://i.pinimg.com/236x/2a/a9/16/2aa916861e24aa68d8291ec4de91e493.jpg",
      "https://i.pinimg.com/236x/ed/8a/85/ed8a85327cb5e8ea2d91cf077c9d91ca.jpg",
      "https://i.pinimg.com/236x/d2/80/b3/d280b334747451a0de6a4a7624418793.jpg"
    ],
  },
  sanji: {
    imagens: [
      "https://i.pinimg.com/236x/b5/47/32/b547320e0fd6f5dad554788d89f61a09.jpg",
      "https://i.pinimg.com/236x/1b/71/5d/1b715d429ef2c87ee51855b9c0e6c897.jpg",
      "https://i.pinimg.com/236x/67/09/fe/6709fe72866137437f34ad26a3b34a45.jpg",
      "https://i.pinimg.com/236x/63/cf/57/63cf5729f61ede7e64ece355b61ee425.jpg"
    ],
  },
  chopper: {
    imagens: [
      "https://i.pinimg.com/236x/98/18/89/981889d02ff112359f323072f397329d.jpg",
      "https://i.pinimg.com/236x/b3/96/ea/b396ea94042c6432ba22c59c22177a56.jpg",
      "https://i.pinimg.com/564x/77/c4/04/77c404a90fb272f9b1ec99150e43ef7e.jpg",
      "https://i.pinimg.com/236x/88/bd/e4/88bde44d4c884526d0713be2050b124d.jpg"
    ],
  },
  robin: {
    imagens: [
      "https://i.pinimg.com/736x/68/35/b3/6835b3aca9bb18125a89ca15a31b1976.jpg",
      "https://i.pinimg.com/236x/28/4a/d7/284ad7045b47bc993ce07ebbf93befdc.jpg",
      "https://i.pinimg.com/236x/bd/68/23/bd6823693fa1b7b72d85a178b2b5f6d0.jpg",
      "https://i.pinimg.com/564x/8f/1b/81/8f1b817acda36325a99be7847386c839.jpg"
    ],
  },
}

function intro() {
  welcome.classList.add('animate__bounceOut');
  setTimeout( () => {
    welcome.style.display = 'none';
    nav.style.visibility = 'visible';
    nav.classList.add('animate__bounceInDown');
    containerPlaylist.style.visibility = 'visible';
    containerPlaylist.add('animate__bounceInDown');
  }, 500 )
}

function menu(event) {
  event.target.classList.add('animate__tada')
}

function removeMenu(event) {
  event.target.classList.remove('animate__tada')
}

function profile (personagem) {
  const imgs = characterPics.querySelectorAll("img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = personagens[personagem].imagens[i]
  }
}

buttonIntro.addEventListener ('click', intro)

for (let i = 0; i < procurados.length; i++) {
  const element = procurados[i];
  element.addEventListener ('mouseenter', menu)
  element.addEventListener ('mouseleave', removeMenu)
}
