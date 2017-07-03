s = 5;

color("white") 
 sphere(r = 5*s);
 
color("black") 
   translate([0,8*s,0]) 
    rotate([90,0,0])
      cylinder(h=2*s, r=5*s, center=true);

color("black") 
  translate([0,-8*s,0]) 
   rotate([90,0,0])
     cylinder(h=2*s, r=5*s, center=true);


color("black") 
  rotate([90,0,0])
    cylinder(h=16*s, r=1*s, center=true);

color("black") 
 translate([4*s,0,0]) 
  rotate([0,90,0]) 
   cylinder(h=3*s, r=2*s, center=true);

