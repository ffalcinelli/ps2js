function venus(){
    var path = new CompoundPath();
    path.strokeWidth = "4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([24.203, 41.007288]);
    path.lineTo([9.004, 41.007288]);
    path.moveTo([16.602, 49.007288]);
    path.lineTo([16.602, 30.765288]);
    path.cubicCurveTo([12.773, 30.757288], [8.973, 29.171288], [6.27, 26.456288]);
    path.cubicCurveTo([3.566, 23.745288], [1.996, 19.937288], [2.004, 16.108288]);
    path.cubicCurveTo([2.008, 12.284288], [3.59, 8.483288], [6.297, 5.780288]);
    path.cubicCurveTo([9.008, 3.077288], [12.812, 1.507288], [16.645, 1.507288]);
    path.cubicCurveTo([20.473, 1.507288], [24.277, 3.077288], [26.988, 5.780288]);
    path.cubicCurveTo([29.695, 8.483288], [31.277, 12.284288], [31.281, 16.108288]);
    path.cubicCurveTo([31.289, 19.937288], [29.719, 23.745288], [27.016, 26.456288]);
    path.cubicCurveTo([24.312, 29.171288], [20.512, 30.757288], [16.684, 30.765288]);
    path.strokeColor = new GrayColor(1);
    return {name:"venus",width:34, height:50,path:path};
}
