function quincunx(){
    var path = new CompoundPath();
    path.strokeWidth = "4.800008";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "10";
    path.moveTo([38.398, 1.527]);
    path.lineTo([0.0, 1.527]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([19.199, 1.527]);
    path.lineTo([9.262, 38.621]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([29.137, 38.621]);
    path.lineTo([19.199, 1.527]);
    path.strokeColor = new GrayColor(1);
    return {name:"quincunx",width:39, height:41,path:path};
}
