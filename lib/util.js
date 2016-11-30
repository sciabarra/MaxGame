var T = THREE
function vec(x,y,z) { return new T.Vector3(x,y,z) }

function basicMesh(geo, col) {
  return new T.Mesh(geo,
    new T.MeshBasicMaterial({color:col})
  )

}

function lambMesh(geo, col) {
  return new T.Mesh(geo,
    new T.MeshLambertMaterial({color:col})
  )
}


function addVec(geo, x, y, z) {
  geo.vertices.push(new T.Vector3(x,y,z) )
}
