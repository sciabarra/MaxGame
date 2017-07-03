var loader = new THREE.TextureLoader();
var base = '/img/textures/'

var cubes = []

// empty (0)
cubes.push(new THREE.Material())

// zolla (1)
var texturesZolla = ['grass.png', 'dirt.png', 'grass_dirt.png'] //ZOLLA = 0
var texture0 = loader.load(base+texturesZolla[0])
var texture1 = loader.load(base+texturesZolla[1])
var texture2 = loader.load(base+texturesZolla[2])
materials = []
materials.push(new THREE.MeshBasicMaterial({map: texture2}))
materials.push(new THREE.MeshBasicMaterial({map: texture2}))
materials.push(new THREE.MeshBasicMaterial({map: texture0}))
materials.push(new THREE.MeshBasicMaterial({map: texture1}))
materials.push(new THREE.MeshBasicMaterial({map: texture2}))
materials.push(new THREE.MeshBasicMaterial({map: texture2}))
cubes.push(new THREE.MeshFaceMaterial(materials));

// others
var textures = [
     'brick', //MATTONE = 1
     'grass', // ERBA = 2
     'plank', // LEGNO = 3
     'bedrock', // ROCCIA = 4
     'obsidian', // NERO = 5
     'whitewool', // BIANCO = 6
     'bluewool', // BLU = 7
     'cobblestone', // PIETRA = 8
     'crate', // CASSA = 9
     'diamond', // DIAMANTE = 10
     'dirt', // TERRA = 11
     'glowstone', //LUCCICA = 11
     'netherrack', // RUBINO = 12
     'redwool', // ROSSO = 13
     'parts-132', // VETRO = 14
     'albero' ,// ALBERO = 15
     'acquachiara' ,// ACQUA = 16
     'fiamma' ,// FIAMMA = 17
     'celeste' ,// CELESTE = 18
     'finestra' ,// FINESTRA = 19
     'porta' ,// PORTA = 20
     'foglie' ,// FOGLIE = 21
     'fiaccola' ,// FIACCOLA = 22
     'vetrata' ,// VETRATA = 23
     'ringhiera' ,// RINGHIERA = 24
];

for(i=0; i<textures.length; i++) {
  var texture =  loader.load(base+textures[i]+".png")
  cubes.push(new THREE.MeshPhongMaterial({map: texture}));
}

function ablock(a) {
   return block(a[3], a[0], a[1], a[2])
}

function block(m,x,y,z) {
    if(m==0)
     return undefined
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var cube = new THREE.Mesh( geometry, cubes[m] );
	cube.position.x = x
    cube.position.y = y
    cube.position.z = z
    return cube
}
