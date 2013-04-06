function eye_of_providence(){
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
    path.moveTo([14.398, 14.0]);
    path.cubicCurveTo([14.398, 14.223], [14.223, 14.398], [14.0, 14.398]);
    path.cubicCurveTo([13.777, 14.398], [13.602, 14.223], [13.602, 14.0]);
    path.cubicCurveTo([13.602, 13.777], [13.777, 13.602], [14.0, 13.602]);
    path.cubicCurveTo([14.223, 13.602], [14.398, 13.777], [14.398, 14.0]);
    path.closePath();
    path.moveTo([14.398, 14.0]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([4.398, 18.801]);
    path.lineTo([14.0, 5.199]);
    path.lineTo([23.602, 18.801]);
    path.strokeColor = new GrayColor(1);
    return {name:"eye_of_providence",width:28, height:28,path:path};
}
