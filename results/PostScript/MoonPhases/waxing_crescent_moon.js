function waxing_crescent_moon(){
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
    path.cubicCurveTo([10.648, 1.199], [7.32, 2.578], [4.949, 4.949]);
    path.cubicCurveTo([2.578, 7.32], [1.199, 10.648], [1.199, 14.0]);
    path.cubicCurveTo([1.199, 17.352], [2.578, 20.68], [4.949, 23.051]);
    path.cubicCurveTo([7.32, 25.422], [10.648, 26.801], [14.0, 26.801]);
    path.lineTo([14.0, 25.602]);
    path.cubicCurveTo([17.621, 22.938], [19.867, 18.496], [19.867, 14.0]);
    path.cubicCurveTo([19.867, 9.504], [17.621, 5.062], [14.0, 2.398]);
    path.closePath();
    path.moveTo([14.0, 1.199]);
    return {name:"waxing_crescent_moon",width:28, height:28,path:path};
}
