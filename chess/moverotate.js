// primo cubo
var geometry = new THREE.CubeGeometry( 20, 20, 20, 0, 0, 0 );
var material = new THREE.MeshLambertMaterial({color: 0xf6546a})
var cube = new THREE.Mesh( geometry, material );
cube.position.y += 10

scene.add( cube );

// controls
cube.rotating = false

document.onkeydown = function(e) {
	var key = e.keyCode
	console.log(key)
	if(key == 32) {
		cube.rotating = ! cube.rotating
	}
	if(cube.rotating) {
		if(key == 37) {
			cube.rotation.y -= 0.1
		} else if(key == 39) {
			cube.rotation.y += 0.1
		}
	} else {
		if(key == 37) {
			cube.position.x -= 0.5
		} else if(key == 39) {
			cube.position.x += 0.5
		} else if(key == 38) {
			cube.position.z -= 0.5
		} else if(key == 40) {
			cube.position.z += 0.5
		}
	}
}

// animazione
var animate = function () {
	//cube.rotation.y += 0.01;
};
