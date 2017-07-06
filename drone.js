// primo cubo

var drone = undefined

var loader = new THREE.STLLoader();
loader.load( '/drone.stl', function ( geometry ) {
  var material = new THREE.MeshPhongMaterial( { color: 0xff5533, specular: 0x111111, shininess: 200 } );
	drone = new THREE.Mesh( geometry, material );
	drone.position.set( 0, 11, 0 );
	drone.rotation.z = Math.PI/2
	drone.rotation.x = Math.PI/2
	drone.scale.set( 0.5, 0.5, 0.5 );
	drone.castShadow = true;
	drone.receiveShadow = true;
	scene.add( drone );
})
