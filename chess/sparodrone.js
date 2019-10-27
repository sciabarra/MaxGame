// primo cubo

var drone = undefined

var loader = new THREE.STLLoader();
loader.load('/room/drone.stl', function(geometry) {
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
//bersaglio
var geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material1 = new THREE.MeshLambertMaterial({
  color: 0x00ff00
})


var pos = 0
//var modx = [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5]
//var modz = [-1, -0.5, 0, 0.5, 1, 0.5, 0, -0.5]

var vel = 2
var modx = [0, vel, 2*vel, vel, 0, -vel, -2*vel, -vel]
var modz = [-2*vel, -vel, 0, vel, 2*vel, vel, 0, -vel]



// inizializza proiettile
var geometryb = new THREE.BoxGeometry(50, 50, 50);
var materialb = new THREE.MeshLambertMaterial({
  color: 0xf6546a
})
var bersaglio = new THREE.Mesh(geometryb, materialb);

bersaglio.position.y = 25
bersaglio.position.x = Math.random() * 500
bersaglio.position.z = Math.random() * 500
scene.add(bersaglio)


var geometryp = new THREE.BoxGeometry(5, 5, 5);
var materialp = new THREE.MeshLambertMaterial({
  color: 0xf6546a
})
var proiettile = new THREE.Mesh(geometryp, materialp);
proiettile.position.y = 20
proiettile.position.x = 0
proiettile.position.z = 0
proiettile.visible = false
scene.add(proiettile)

var dx = 0
var dz = 0


document.onkeydown = function(e) {
  //console.log(e)
  //sinistra
  if (e.keyCode == 37) {
    if (pos == 0) pos = 7
    else pos = pos - 1
    drone.rotation.z -= Math.PI / 4;
    console.log("sinistra pos =" + pos)
    console.log(modx[pos])
    console.log(modz[pos])
  }

  //destra
  if (e.keyCode == 39) {
    pos = (pos + 1) % 8
    drone.rotation.z += Math.PI / 4;
    console.log("destra pos =" + pos)
    console.log(modx[pos])
    console.log(modz[pos])
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

  if (e.keyCode == 32) {
    proiettile.position.x = drone.position.x
    proiettile.position.z = drone.position.z
    dz = modz[pos] * 2;
    dx = modx[pos] * 2;
    proiettile.visible = true

  }

  //console.log(drone.position.x)
  //console.log(drone.position.z)
}

function animate() {
  proiettile.position.z += dz
  proiettile.position.x += dx
  console.log(proiettile.position.x +":"+proiettile.position.z+" "+bersaglio.position.x+":"+bersaglio.position.z)

  if (proiettile.position.x >= bersaglio.position.x - 50 &&
    proiettile.position.x <= bersaglio.position.x + 50 &&
    proiettile.position.z >= bersaglio.position.z - 50 &&
    proiettile.position.z <= bersaglio.position.z + 50) {
    bersaglio.position.y = 25
    bersaglio.position.x = Math.random() * 500
    bersaglio.position.z = Math.random() * 500

  }
}
