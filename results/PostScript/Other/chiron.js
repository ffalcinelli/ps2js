function chiron(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([16.59, 24.898628]);
    path.cubicCurveTo([16.59, 29.148628], [13.145, 32.593628], [8.895, 32.593628]);
    path.cubicCurveTo([4.641, 32.593628], [1.195, 29.148628], [1.195, 24.898628]);
    path.cubicCurveTo([1.195, 20.648628], [4.641, 17.203628], [8.895, 17.203628]);
    path.cubicCurveTo([13.145, 17.203628], [16.59, 20.648628], [16.59, 24.898628]);
    path.closePath();
    path.moveTo([16.59, 24.898628]);
    path.strokeColor = new GrayColor(1);
    path.strokeWidth = "2.4";
    path.moveTo([5.957, 17.589628]);
    path.lineTo([6.203, -0.581372]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([6.215, 8.214628]);
    path.lineTo([14.074, 1.586628]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([6.246, 8.050628]);
    path.lineTo([14.102, 14.679628]);
    path.strokeColor = new GrayColor(1);
    return {name:"chiron",width:18, height:35,path:path};
}
