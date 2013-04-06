function conjunction(){
    var path = new CompoundPath();
    path.strokeWidth = "4.8";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "1.6";
    path.moveTo([20.934, 25.223213]);
    path.cubicCurveTo([20.934, 27.629213], [19.934, 30.023213], [18.219, 31.727213]);
    path.cubicCurveTo([16.504, 33.434213], [14.094, 34.426213], [11.668, 34.426213]);
    path.cubicCurveTo([9.242, 34.426213], [6.832, 33.434213], [5.117, 31.727213]);
    path.cubicCurveTo([3.402, 30.023213], [2.402, 27.629213], [2.402, 25.223213]);
    path.cubicCurveTo([2.402, 22.813213], [3.402, 20.418213], [5.117, 18.715213]);
    path.cubicCurveTo([6.832, 17.012213], [9.242, 16.020213], [11.668, 16.020213]);
    path.cubicCurveTo([14.094, 16.020213], [16.504, 17.012213], [18.219, 18.715213]);
    path.cubicCurveTo([19.934, 20.418213], [20.934, 22.813213], [20.934, 25.223213]);
    path.closePath();
    path.moveTo([20.934, 25.223213]);
    path.strokeColor = new GrayColor(1);
    path.miterLimit = "4";
    path.moveTo([19.332, 17.617213]);
    path.lineTo([35.332, 1.617213]);
    path.strokeColor = new GrayColor(1);
    return {name:"conjunction",width:38, height:37,path:path};
}
