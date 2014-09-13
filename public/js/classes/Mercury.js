var Mercury = (function(THREE) {

  var Mercury = function(radius, widthSegments, heightSegments, position) {
    this.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    this.position = position;

    this.material = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture('img/mercury.jpg')
    });
  };

  Mercury.prototype.create = function() {
    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );
    this.mesh.position = new THREE.Vector3(this.position.x, this.position.y, this.position.z);
    return this;
  };

  Mercury.prototype.rotate = function() {
    this.mesh.rotation.y += 0.058;
    return this;
  };

  return Mercury;

})(THREE);