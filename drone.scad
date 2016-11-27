color("white") 
 sphere(r = 5);
 
color("black") 
   translate([0,8,0]) 
    rotate([90,0,0])
      cylinder(h=2, r=5, center=true);

color("black") 
  translate([0,-8,0]) 
   rotate([90,0,0])
     cylinder(h=2, r=5, center=true);


color("black") 
  rotate([90,0,0])
    cylinder(h=16, r=1, center=true);

color("black") translate([4,0,0]) rotate([0,90,0]) cylinder(h=3, r=2, center=true);

