// primo cubo

var board = undefined

var loader = new THREE.FBXLoader();
loader.load('/chess/chess.fbx',  function(obj) {
  obj.scale.set(20, 20, 20);
  scene.add(obj);
  board = obj
})

var pos = 0
var modx = [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5]
var modz = [-1, -0.5, 0, 0.5, 1, 0.5, 0, -0.5]

document.onkeydown = function(e) {
  //console.log(e)
  //sinistra
  if (e.keyCode == 37) {
    if(pos == 0) pos = 7
    else pos = pos - 1
    board.rotation.z -= Math.PI / 4;
    console.log("sinistra pos =" + pos)
    console.log (modx[pos])
    console.log (modz[pos])
  }

  //destra
  if (e.keyCode == 39) {
    pos = (pos + 1) % 8
    board.rotation.z += Math.PI / 4;
    console.log("destra pos =" + pos)
    console.log (modx[pos])
    console.log (modz[pos])
  }

  //avanti
  if (e.keyCode == 38) {
    board.position.z += modz[pos];
    board.position.x += modx[pos];
  }


  //indietro
  if (e.keyCode == 40) {
    board.position.z -= modz[pos];
    board.position.x -= modx[pos];
  }

  //console.log(drone.position.x)
  //console.log(drone.position.z)
}
