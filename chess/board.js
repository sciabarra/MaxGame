// primo cubo

var board = undefined

var loader = new THREE.OBJLoader();
loader.load('/chess/objects/chessboard.obj',  function(obj) {
  obj.scale.set(20, 20, 20);
  scene.add(obj);
  board = obj
}, 
// called when loading is in progresses
function ( xhr ) {

  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

},
// called when loading has errors
function ( error ) {

  console.log( 'An error happened' );

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
