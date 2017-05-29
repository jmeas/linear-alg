import {
  Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh
} from 'three';
import OrbitControls from 'three-orbitcontrols';

const scene = new Scene();

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({color: 0xffffff});
const cube = new Mesh(geometry, material);
scene.add(cube);

var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.5;
controls.enableZoom = false;

function render() {
  renderer.render(scene, camera);
}

controls.addEventListener('change', render);
render();
