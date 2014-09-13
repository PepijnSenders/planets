(function () {

  var solarSystem = document.getElementById('solarSystem');

  var width  = window.innerWidth,
      height = window.innerHeight;

  var universe = new Universe(width, height, 45, 0.01, 1000);

  var stars = new Stars(500, 64, 64);
  var sun = new Sun(5, 64, 64, {
    x: 0,
    y: 0,
    z: 0
  });
  var mercury = new Mercury(0.383, 64, 64, {
    x: 20,
    y: 20,
    z: 0
  });
  var venus = new Venus(0.950, 64, 64, {
    x: 30,
    y: 30,
    z: 0
  });
  var earth = new Earth(1, 64, 64, {
    x: 50,
    y: 50,
    z: 0
  });

  universe.addObject('sun', sun.create())
          .addObject('earth', earth.create())
          .addObject('mercury', mercury.create())
          .addObject('venus', venus.create())
          .addObject('stars', stars.create());

  solarSystem.appendChild(universe.getElement());

  universe.render();

}());