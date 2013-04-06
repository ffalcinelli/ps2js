function moon(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "round";
    path.miterLimit = "4";
    path.moveTo([1.215, 1.354295]);
    path.cubicCurveTo([6.574, -0.297705], [12.695, 0.741295], [17.211, 4.073295]);
    path.cubicCurveTo([21.723, 7.405295], [24.52, 12.944295], [24.52, 18.554295]);
    path.cubicCurveTo([24.52, 24.167295], [21.723, 29.706295], [17.211, 33.038295]);
    path.cubicCurveTo([12.695, 36.370295], [6.574, 37.409295], [1.215, 35.757295]);
    path.cubicCurveTo([4.859, 34.632295], [8.125, 32.311295], [10.391, 29.245295]);
    path.cubicCurveTo([12.656, 26.175295], [13.906, 22.370295], [13.906, 18.554295]);
    path.cubicCurveTo([13.906, 14.741295], [12.656, 10.936295], [10.391, 7.866295]);
    path.cubicCurveTo([8.125, 4.796295], [4.859, 2.479295], [1.215, 1.354295]);
    path.closePath();
    path.moveTo([1.215, 1.354295]);
    path.strokeColor = new GrayColor(1);
    return {name:"moon",width:26, height:39,path:path};
}
