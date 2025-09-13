const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Tardis ni Doctor Who
const boxGeometry = new THREE.BoxGeometry( 4, 10, 4 );
const boxMaterial = new THREE.MeshBasicMaterial( { color: 0x00306e } );
const cube = new THREE.Mesh( boxGeometry, boxMaterial );
scene.add( cube );
cube.position.x = 10;
cube.position.y = -4;
cube.position.z = 5;

const capsuleGeometry = new THREE.CapsuleGeometry( 0.5, 1, 1, 8 ); 
const capsuleMaterial = new THREE.MeshBasicMaterial( {color: 0xe8fdff} ); 
const capsule = new THREE.Mesh( capsuleGeometry, capsuleMaterial ); scene.add( capsule );
capsule.position.x = 10;
capsule.position.y = 1;
capsule.position.z = 5;

//black hole :3
const sphereGeometry = new THREE.SphereGeometry( 6, 32, 16 ); 
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x050505 } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );
sphere.position.z = -10;

const sphereOutlineMaterial = new THREE.MeshBasicMaterial({ color: 0xffd69c, side: THREE.BackSide });
const sphereOutline = new THREE.Mesh(sphereGeometry, sphereOutlineMaterial);
sphereOutline.scale.multiplyScalar(1.05);
sphere.add(sphereOutline);

//ring around the black hole
const torusGeometry = new THREE.TorusGeometry( 7, 5, 2, 100 ); 
const torusMaterial = new THREE.MeshBasicMaterial( { color: 0xf28416 } ); 
const torus = new THREE.Mesh( torusGeometry, torusMaterial );
scene.add( torus );
torus.position.z = -10;

//Random nga star kay wa koy mahuna2 nga object
const geometry = new THREE.RingGeometry( 1, 25, 1 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material ); scene.add( mesh );
mesh.position.x = -350;
mesh.position.z = -400;
mesh.position.y = 150;


camera.position.z = 15;



//Renderer
function animate(time) {
  renderer.render( scene, camera );

  cube.rotation.y += 0.01;
  sphere.rotation.x += 0.01;  
  sphere.rotation.y += 0.01;
  torus.rotation.x += 0.01;  
  torus.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
}
renderer.setAnimationLoop( animate );
