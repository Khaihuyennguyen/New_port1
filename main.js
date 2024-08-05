import './style.css'
import { animate, inView } from 'motion';
import {
  Scene,
  PerspectiveCamera, 
  MeshBasicMaterial,
  BoxGeometry,
  WebGLRenderer,
  Mesh,
} from 'three';

const sneakerTag = document.querySelector("section.sneaker");

animate("header", {
  y: [-100, 0],
  opacity: [0, 1],
},
  { duration: 1, delay: 2.5, ease: 'easeInOut' },
)

animate("footer", {
  y: [-100, 0],
  opacity: [0, 1],
},
  { duration: 1, delay: 2.5, ease: 'easeInOut' },
)

animate("h1.introduction", {
  y: [-100, 0],
  opacity: [0, 1],

},
  { duration: 1, delay: 2, ease: 'easeInOut' },
)

animate("section.content", {opacity: 0})
inView("section.content", (info) => {
  animate(info.target, {
    opacity: 1 },
    { duration: 1, delay: 1,  },
  )
})

// Get time

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `Temple, Texas ${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = currentTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();

// const scene = new Scene();
// const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setClearColor(0x00000, 0)
// sneakerTag.appendChild( renderer.domElement );

// const geometry = new BoxGeometry( 1, 1, 1 );
// const material = new MeshBasicMaterial( { color: 0xfff000 } );
// const cube = new Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// // function render() {
// //   requestAnimationFrame( render );


// // 	renderer.render( scene, camera );
// // }
// // render();

// const render = () => {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// renderer.setAnimationLoop( render );


const canvas = document.createElement("canvas")
const sandbox = new GlslCanvas(canvas)

sneakerTag.body.appendChild(canvas)

const sizer = function () {
  const ww = window.innerWidth
  const wh = window.innerHeight
  const dpi = window.devicePixelRatio
  
  const s = Math.max(ww, wh)
  
  canvas.width = s * dpi
  canvas.height = s * dpi
  canvas.style.width = s + "px"
  canvas.style.height = s + "px"
}

sizer()
window.addEventListener("resize", function () {
  sizer()
})

sandbox.load(frag)
sandbox.setUniform("seed", Math.random())