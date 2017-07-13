// primo cubo

var drone = undefined
var drz = undefined
var dpx = undefined
var dpz = undefined

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

  drz = drone.rotation.z
  dpx = drone.position.x
  dpz = drone.position.z

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
    if(pos ==0) pos = 3
    else pos = pos - 1
    drz -= Math.PI / 2;
  }

  //destra
  if (e.keyCode == 39){
    pos = (pos + 1) % 4
    drz += Math.PI / 2;
  }
  //avanti
  if (e.keyCode == 38) {
    dpz += modz[pos];
    dpx += modx[pos];
  }
  //indietro
  if (e.keyCode == 40) {
    dpz -= modz[pos];
    dpx -= modx[pos];
  }
  //console.log (drone.position.x)
  //console.log (drone.position.z)
  //console.log ("pos ="+pos)
}

function animate() {
  //console.log(".")
  if(drone.position.x < dpx)
   drone.position.x += 0.1
  if(drone.position.x > dpx)
   drone.position.x -= 0.1
  if(drone.position.z < dpz)
    drone.position.z += 0.1
  if(drone.position.z > dpz)
    drone.position.z -= 0.1
  if(drone.rotation.z > drz)
      drone.rotation.z -= Math.PI/128
  if(drone.rotation.z < drz)
      drone.rotation.z += Math.PI/128
}
