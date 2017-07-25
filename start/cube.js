/* prepara la scena e la telecamera e la mette nella pagina */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var light = new THREE.PointLight(0xffffff, 1.2);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* prepara un cubo e lo mette nella scena */
// primo cubo
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial({color: 0xf6546a})
var cube = new THREE.Mesh( geometry, material );

// la scena
light.position.set(0, 0, 6);
scene.add( light );
scene.add( cube );
camera.position.z = 5;
renderer.render(scene, camera);


// animazione
var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};
animate();
