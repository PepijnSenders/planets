var Universe = (function(THREE) {

  var Universe = function(width, height, fov, near, far) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    this.camera.position.z = 50;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);

    this.ambientLight = new THREE.AmbientLight(0x333333);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(5, 3, 5);

    this.scene.add(this.ambientLight);
    this.scene.add(this.directionalLight);

    this.controls = new THREE.OrbitControls(this.camera);

    this.objects = {};
  };

  Universe.prototype.addObject = function(name, object) {
    if (name in this.objects) {
      return console.error('Object ' + name + ' already exists');
    }
    this.objects[name] = object;
    this.scene.add(object.mesh);

    return this;
  };

  Universe.prototype.getObject = function(name) {
    return this.objects[name];
  };

  Universe.prototype.getElement = function() {
    return this.renderer.domElement;
  };

  Universe.prototype.render = function() {
    this.controls.update();
    this.getObject('earth').rotate();
    this.getObject('mercury').rotate();
    this.getObject('sun').rotate();
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  };

  return Universe;

})(THREE);