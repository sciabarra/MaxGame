// primo cubo
var geometry = new THREE.CubeGeometry(20, 20, 20, 0, 0, 0);
var material = new THREE.MeshLambertMaterial({
  color: 0x00ff00
})
var cube = new THREE.Mesh(geometry, material);
cube.position.y += 10

scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.z += 69
cube.position.y += 10
scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.z -= 69
cube.position.y += 10
scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.x += 40
cube.position.y += 10
scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.x -= 40
cube.position.y += 10
scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.x -= 40
cube.position.y += 10
cube.position.z += 30
scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.x -= 40
cube.position.y += 10
cube.position.z -= 30
scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.x += 40
cube.position.y += 10
cube.position.z += 30
scene.add(cube);

var cube = new THREE.Mesh(geometry, material);
cube.position.x += 40
cube.position.y += 10
cube.position.z -= 30
scene.add(cube);

var geometry = new THREE.CubeGeometry(20, 20, 20, 0, 0, 0);
var material = new THREE.MeshLambertMaterial({
  color: 0xf6546a
})

var cube = new THREE.Mesh(geometry, material);
cube.position.x -= 200
cube.position.y += 10
cube.position.z += 30
scene.add(cube);

document.onkeydown = function(e) {
  console.log(e)
  //sinistra
  if (e.keyCode == 37)
    cube.position.x -= 0.5;
  //destra
  if (e.keyCode == 39)
    cube.position.x += 0.5;
  //avanti
  if (e.keyCode == 38)
    cube.position.z += 0.5;
  //indietro
  if (e.keyCode == 40)
    cube.position.z -= 0.5;
  //z
  if (e.keyCode == 88)
    cube.rotation.y += 0.1;
  //x
  if (e.keyCode == 90)
    cube.rotation.y -= 0.1;

}
