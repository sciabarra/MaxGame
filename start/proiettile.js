/* prepara la scena e la telecamera e la mette nella pagina */
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* prepara un cubo e lo mette nella scena */
// primo cubo
var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var material = new THREE.MeshLambertMaterial({
  color: 0xff5533
})
var cube = new THREE.Mesh(geometry, material);

//secondo cubo
var geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material1 = new THREE.MeshLambertMaterial({
  color: 0x00ff00
})

var cube1 = new THREE.Mesh(geometry1, material1);

cube1.position.y = -2
cube1.position.x = -2

var cpx = cube1.position.x
var cpy = cube1.position.y

var dirx = 0.05
var diry = 0.05

// luce
var light = new THREE.PointLight(0xffffff, 1.2);

// la scena
light.position.set(0, 0, 6);
scene.add(light);
scene.add(cube);
scene.add(cube1);

camera.position.z = 5;
camera.position.y = 1;
var color = 0


// inizio cubo rosso
var x = 0
var y = 0
var dx = 0
var dy = 0
var animate = function() {
  requestAnimationFrame(animate);

  //animazionde cubo rosso
  cube.rotation.y += 0.0


  x += dx
  y += dy

  // vincoli
  if (x <= -2 || x >= 2 || y <= -2 || y >= 2) {
    dx = 0
    dy = 0
    x = 0
    y = 0

  }

  // sposta il cubo

  cube.position.x = x
  cube.position.y = y

  // cubo verde
  if (cpx <= -2 && cpy <= -2) {
    //console.log("destra")
    dirx = 0.05
    diry = 0
  }
  if (cpx >= 2 && cpy <= -2) {
    //console.log("su")
    dirx = 0
    diry = 0.05
  }
  if (cpx >= 2 && cpy >= 2) {
    //console.log("sinistra")
    dirx = -0.05
    diry = 0
  }
  if (cpx <= -2 && cpy >= 2) {
    //console.log("giu")
    dirx = 0
    diry = -0.05
  }
  cpx += dirx
  cpy += diry

  cube1.position.x = cpx
  cube1.position.y = cpy
  //console.log (new Date())
  // fine
  renderer.render(scene, camera);

  //console.log(cpx+":"+cpy)
};
animate();

//renderer.render(scene, camera);
document.onkeydown = function(e) {
  if (e.keyCode == 37) {
    dx = -0.03
    dy = 0
    x = 0
    y = 0
  }
  if (e.keyCode == 39) {
    dx = 0.03
    dy = 0
    x = 0
    y = 0
  }
  if (e.keyCode == 40) {
    dx = 0
    dy = -0.03
    x = 0
    y = 0
  }
  if (e.keyCode == 38) {
    dx = 0
    dy = 0.03
    x = 0
    y = 0
  }
  if (e.keyCode == 32) {
    dx = 0
    dy = 0
    x = 0
    y = 0
  }
}
