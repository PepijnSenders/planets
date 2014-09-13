var Venus = (function(THREE) {

  var Venus = function(radius, widthSegments, heightSegments, position) {
    this.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    this.position = position;

    this.material = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture('img/venus.png')
    });
  };

  Venus.prototype.create = function() {
    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );
    this.mesh.position = new THREE.Vector3(this.position.x, this.position.y, this.position.z);
    return this;
  };

  Venus.prototype.rotate = function() {
    this.mesh.rotation.y += 0.02430187;
    return this;
  };

  return Venus;

})(THREE);