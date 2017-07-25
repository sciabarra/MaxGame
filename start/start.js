/* prepara la scena e la telecamera e la mette nella pagina */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* prepara un cubo e lo mette nella scena */
// primo cubo
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial({color: 0xf6546a})
var cube = new THREE.Mesh( geometry, material );

// secondo cubo
var geometry1 = new THREE.BoxGeometry( 1.5,	1.5, 1.5 );
var material1 = new THREE.MeshLambertMaterial({color: 0x00ff00})
var cube1 = new THREE.Mesh( geometry1, material1 );
cube1.position.x=4

// luce
var light = new THREE.PointLight(0xffffff, 1.2);

// la scena
light.position.set(0, 0, 6);
scene.add( light );
scene.add( cube );
scene.add( cube1 )
camera.position.z = 5;
camera.position.y = 0;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
  cube1.rotation.y += 0.02;
	renderer.render(scene, camera);
};
animate();
//renderer.render(scene, camera);
