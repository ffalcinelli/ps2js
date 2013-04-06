function pluto1(){
    var path = new CompoundPath();
    path.strokeWidth = "2.32";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([4.352, 23.502521]);
    path.lineTo([17.148, 23.502521]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([10.75, 29.900521]);
    path.lineTo([10.75, 16.303521]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([16.352, 6.701521]);
    path.cubicCurveTo([16.352, 9.795521], [13.844, 12.303521], [10.75, 12.303521]);
    path.cubicCurveTo([7.656, 12.303521], [5.148, 9.795521], [5.148, 6.701521]);
    path.cubicCurveTo([5.148, 3.607521], [7.656, 1.099521], [10.75, 1.099521]);
    path.cubicCurveTo([13.844, 1.099521], [16.352, 3.607521], [16.352, 6.701521]);
    path.closePath();
    path.moveTo([16.352, 6.701521]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([20.352, 6.701521]);
    path.cubicCurveTo([20.352, 12.002521], [16.051, 16.303521], [10.75, 16.303521]);
    path.cubicCurveTo([5.449, 16.303521], [1.148, 12.002521], [1.148, 6.701521]);
    path.strokeColor = new GrayColor(1);
    return {name:"pluto1",width:22, height:30,path:path};
}
