// primo cubo

var drone = undefined

var loader = new THREE.STLLoader();
loader.load('/drone.stl', function(geometry) {
  var material = new THREE.MeshPhongMaterial({
    color: 0xff5533,
    specular: 0x111111,
    shininess: 200
  });
  drone = new THREE.Mesh(geometry, material);
  drone.position.set(0, 11, 0);
  drone.rotation.z = Math.PI / 2
  drone.rotation.x = Math.PI / 2
  drone.scale.set(0.5, 0.5, 0.5);
  drone.castShadow = true;
  drone.receiveShadow = true;
  scene.add(drone);
})
var pos = 0
var modx = [0,-1,0,1]
var modz = [1,0,-1,0]
document.onkeydown = function(e) {
  //console.log(e)
  //sinistra
  if (e.keyCode == 37){
    pos = Math.abs((pos - 1) % 4)
    drone.rotation.z -= Math.PI / 2;
  }

  //destra
  if (e.keyCode == 39){
    pos = (pos + 1) % 4
    drone.rotation.z += Math.PI / 2;
  }
  //avanti
  if (e.keyCode == 38) {
    drone.position.z += modz[pos];
    drone.position.x += modx[pos];
  }
  //indietro
  if (e.keyCode == 40) {
    drone.position.z -= modz[pos];
    drone.position.x -= modx[pos];
  }
  console.log (drone.position.x)
  console.log (drone.position.z)
  console.log ("pos ="+pos)
}
