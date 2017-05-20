/**
 * Created by Wagner on 20 de Maio de 2017.
 */
'use strict';
function PolylineContext () {
    this.currentPath = null;
    this.currentIndex = 0;
}

PolylineContext.prototype.beginPath = function() {};

PolylineContext.prototype.moveTo = function(x, y) {
    if (this.currentPath) {
        var latLng = new google.maps.LatLng(y, x);
        this.currentPath.setAt(this.currentIndex, latLng);
        this.currentIndex++;
    }
};

PolylineContext.prototype.lineTo = function(x, y) {
    if (this.currentPath) {
        var latLng = new google.maps.LatLng(y, x);
        this.currentPath.setAt(this.currentIndex, latLng);
        this.currentIndex++;
    }
};

PolylineContext.prototype.arc = function(x, y, radius, startAngle, endAngle) {};

PolylineContext.prototype.closePath = function() {};

PolylineContext.prototype.setCurrent = function (path) {
    context.currentPath = polyline.getPath();
};