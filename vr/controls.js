// arrow
function v(x,z) { return new THREE.Vector3(x,0,z); }
function f(a,b,c) { return new THREE.Face3(a,b,c); }
var vertices = [ v(0,0),
  v(-2,2), v(2,2), v(-2,-2), v(2,-2),
  v(0,3), v(3,0), v(0,-3), v(-3,0),
  v(0,5), v(5,0), v(0,-5), v(-5,0) ]

function arrow(vertices, faces, delta, trigger) {
  var geo = new THREE.Geometry();
    geo.vertices = vertices
    geo.faces = faces
    //console.log(geo)
    geo.computeBoundingSphere();
    var mesh = new THREE.Mesh( geo,
    new THREE.MeshBasicMaterial(
            { color: "white", side: THREE.DoubleSide } ) );
        mesh.trigger = trigger;
        mesh.position.y += delta[1]
        mesh.position.x += delta[0]
        mesh.position.z += delta[2]
        mesh.scale = 0.5
        console.log(mesh.position)
        return mesh;
  }

     var bk = arrow(vertices, [f(9,1,5), f(9,5,2)], [0,0,0], function(camera, cursors) {
           //console.log("bk!!!")
           camera.position.z += 0.05
       })
    var rt = arrow(vertices, [f(2,10,6), f(6,10,4)], [0,0,0] , function(camera, cursors){
           //console.log("rt!!!")
           camera.position.x += 0.05
       })
    var lf = arrow(vertices, [f(1,12,8), f(12,8,3)], [0, 0,0], function(camera, cursors){
           //console.log("lf!!!")
           camera.position.x -= 0.05
       })
    var fw = arrow(vertices, [ f(3,11,7), f(7,4,11)], [0, 0,0], function(camera, cursors){
           //console.log("fw!!!")
           camera.position.z -= 0.05
       })

      var cursors = new THREE.Object3D()
      cursors.add(fw)
      cursors.add(rt)
      cursors.add(bk)
      cursors.add(lf)
      scene.add(cursors)

      // cursor
      var r = 0.01;
      var circleShape = new THREE.Shape();
      circleShape.absarc(0,0,r,0,Math.PI*2,true)
      var holePath = new THREE.Path()
      holePath.absarc(0,0,r/2,0,Math.PI*2,true)
      circleShape.holes.push(holePath)

      var geometry = new THREE.ShapeGeometry( circleShape );
      var mesh = new THREE.Mesh( geometry,
        new THREE.MeshBasicMaterial( { color: "blue", side: THREE.DoubleSide } ) );
      mesh.position.set( 0, 0, -0.5);
      camera.add(mesh)
      console.log("adding to camera")
      console.log(camera)
      scene.add(camera)

      var raycaster = new THREE.Raycaster()
      var center = new THREE.Vector2(0,0)

      function detect(camera, display) {
        camera.quaternion.fromArray( display.getPose().orientation );
        raycaster.setFromCamera(center, camera)
        for(var i=0; i<cursors.children.length; i++) {
            var cursor = cursors.children[i]
            var intersected = raycaster.intersectObject(cursor)
            //console.log(intersected)
            if(intersected.length>0) {
                //console.log("ok")
                cursor.material.color.set("yellow")
                cursor.trigger(camera, cursors)
                console.log(camera.position)
            } else  {
                //console.log("KO")
                cursor.material.color.set("white")
            }/**/
        }
        cursors.position.x = camera.position.x
        cursors.position.z = camera.position.z
      }
