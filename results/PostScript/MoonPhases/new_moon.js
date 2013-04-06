function new_moon(){
    var path = new CompoundPath();
    path.moveTo([26.801, 14.0]);
    path.cubicCurveTo([26.801, 21.07], [21.07, 26.801], [14.0, 26.801]);
    path.cubicCurveTo([6.93, 26.801], [1.199, 21.07], [1.199, 14.0]);
    path.cubicCurveTo([1.199, 6.93], [6.93, 1.199], [14.0, 1.199]);
    path.cubicCurveTo([21.07, 1.199], [26.801, 6.93], [26.801, 14.0]);
    path.closePath();
    path.moveTo([26.801, 14.0]);
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([26.801, 14.0]);
    path.cubicCurveTo([26.801, 21.07], [21.07, 26.801], [14.0, 26.801]);
    path.cubicCurveTo([6.93, 26.801], [1.199, 21.07], [1.199, 14.0]);
    path.cubicCurveTo([1.199, 6.93], [6.93, 1.199], [14.0, 1.199]);
    path.cubicCurveTo([21.07, 1.199], [26.801, 6.93], [26.801, 14.0]);
    path.closePath();
    path.moveTo([26.801, 14.0]);
    path.strokeColor = new GrayColor(1);
    return {name:"new_moon",width:28, height:28,path:path};
}
