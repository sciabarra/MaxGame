// primo cubo
var geometry = new THREE.CubeGeometry( 20, 20, 20, 0, 0, 0 );
var material = new THREE.MeshLambertMaterial({color: 0xf6546a})
var cube = new THREE.Mesh( geometry, material );
cube.position.y += 10

scene.add( cube );

// animazione
var animate = function () {
	cube.rotation.y += 0.01;
};
