// primo cubo

var drone = undefined
var drz = undefined
var drx = undefined
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
  drone.rotation.z = -Math.PI / 2
  drone.rotation.x = Math.PI / 2
  drone.scale.set(0.5, 0.5, 0.5);
  drone.castShadow = true;
  drone.receiveShadow = true;
  scene.add(drone);
})
var pos = 0
//var modx = [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5]
var modx[0,-1,0,1]
var modz[1,0,-1,0]
document.onkeydown = function(e) {
  //var modx = [0,0.25, 0.5,0.75, 1,0.75, 0.5,0.25, 0,-0.25, -0.5,-0.75, -1,-0.75, -0.5, -0.25]
  //var modz = [-1, -0.5, 0, 0.5, 1, 0.5, 0, -0.5]
  //var modz = [-1,-0.75, -0.5,-0.25, 0,0.25, 0.5,0.75, 1,0.75, 0.5,0.25, 0,-0.25, -0.5, -0.75]



  //console.log(e)
  //sinistra
  if (e.keyCode == 37) {
    if (pos == 0) pos = 15
    else pos = pos - 1
    drz -= Math.PI / 2
    //drone.rotation.z -= Math.PI / 8;
    //console.log("sinistra pos =" + pos)
    //console.log (modx[pos])
    //console.log (modz[pos])
  }

  //destra
  if (e.keyCode == 39) {
    pos = (pos + 1) % 4
    drz += Math.PI / 2
    //drone.rotation.z += Math.PI / 8;
    //console.log("destra pos =" + pos)
    //console.log (modx[pos])
    //console.log (modz[pos])
  }

  //avanti
  if (e.keyCode == 38) {
    drz += modz[pos];
    drx += modx[pos];
    //drone.position.z += modz[pos]*2;
    //drone.position.x += modx[pos]*2;
  }


  //indietro
  if (e.keyCode == 40) {
    drz -= modz[pos];
    drx -= modx[pos];
  }

  //drone.position.z -= modz[pos]*2;
  //drone.position.x -= modx[pos]*2;
}

function animate() {
  //console.log(".")
  if (drone.position.x < dpx)
    drone.position.x += 0.1
  if (drone.position.x > dpx)
    drone.position.x -= 0.1
  if (drone.position.z < dpz)
    drone.position.z += 0.1
  if (drone.position.z > dpz)
    drone.position.z -= 0.1
  if (drone.rotation.z > drz)
    drone.rotation.z -= Math.PI / 32
  if (drone.rotation.z < drz)
    drone.rotation.z += Math.PI / 32
}


//console.log(drone.position.x)
//console.log(drone.position.z)
}
