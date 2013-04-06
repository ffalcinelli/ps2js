function neptune(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([4.652, 2.613]);
    path.cubicCurveTo([2.527, 17.043], [6.066, 19.207], [13.145, 19.207]);
    path.cubicCurveTo([20.223, 19.207], [23.762, 17.043], [21.641, 2.613]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([13.145, 4.055]);
    path.lineTo([13.145, 30.746]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([7.484, 24.977]);
    path.lineTo([18.809, 24.977]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([0.738, 4.605]);
    path.lineTo([4.754, 1.563]);
    path.lineTo([7.738, 5.656]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([9.539, 8.051]);
    path.lineTo([13.039, 4.406]);
    path.lineTo([16.617, 7.973]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([18.5, 5.906]);
    path.lineTo([21.535, 1.852]);
    path.lineTo([25.516, 4.949]);
    path.strokeColor = new GrayColor(1);
    return {name:"neptune",width:27, height:31,path:path};
}