function waning_gibbous_moon(){
    var path = new CompoundPath();
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
    path.moveTo([14.0, 1.199]);
    path.cubicCurveTo([17.352, 1.199], [20.68, 2.578], [23.051, 4.949]);
    path.cubicCurveTo([25.422, 7.32], [26.801, 10.648], [26.801, 14.0]);
    path.cubicCurveTo([26.801, 17.352], [25.422, 20.68], [23.051, 23.051]);
    path.cubicCurveTo([20.68, 25.422], [17.352, 26.801], [14.0, 26.801]);
    path.lineTo([14.0, 25.602]);
    path.cubicCurveTo([17.621, 22.938], [19.867, 18.496], [19.867, 14.0]);
    path.cubicCurveTo([19.867, 9.504], [17.621, 5.062], [14.0, 2.398]);
    path.closePath();
    path.moveTo([14.0, 1.199]);
    return {name:"waning_gibbous_moon",width:28, height:28,path:path};
}
