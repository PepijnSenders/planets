var Earth = (function(THREE) {

  var Earth = function(radius, widthSegments, heightSegments, position) {
    this.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    this.position = position;

    this.material = new THREE.MeshPhongMaterial({
      map:         THREE.ImageUtils.loadTexture('img/earth.jpg'),
      bumpMap:     THREE.ImageUtils.loadTexture('img/earth_bump.jpg'),
      bumpScale:   0.005,
      specularMap: THREE.ImageUtils.loadTexture('img/earth_water.png'),
      specular:    new THREE.Color('grey')
    });
  };

  Earth.prototype.create = function() {
    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );
    this.mesh.position = new THREE.Vector3(this.position.x, this.position.y, this.position.z);
    return this;
  };

  Earth.prototype.rotate = function() {
    this.mesh.rotation.y += 0.001;
    return this;
  };

  return Earth;

})(THREE);