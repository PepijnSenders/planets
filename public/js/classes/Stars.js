var Stars = (function(THREE) {

  var Stars = function(radius, widthSegments, heightSegments) {
    this.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    this.material = new THREE.MeshBasicMaterial({
      map:  THREE.ImageUtils.loadTexture('img/stars.png'),
      side: THREE.BackSide
    });
  };

  Stars.prototype.create = function() {
    this.mesh = new THREE.Mesh(
      this.geometry,
      this.material
    );
    return this;
  };


  return Stars;

})(THREE);