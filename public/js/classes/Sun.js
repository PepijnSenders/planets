var Sun = (function(THREE) {

  var Sun = function(radius, widthSegments, heightSegments, position) {
    this.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    this.position = position;

    this.material = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture('img/sun.jpg')
    });
  };

  Sun.prototype.create = function() {
    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );
    this.mesh.position = new THREE.Vector3(this.position.x, this.position.y, this.position.z);
    return this;
  };

  Sun.prototype.rotate = function() {
    this.mesh.rotation.y += 0.025;
    return this;
  };

  return Sun;

})(THREE);