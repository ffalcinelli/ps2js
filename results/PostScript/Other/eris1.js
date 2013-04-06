function eris1(){
    var path = new CompoundPath();
    path.strokeWidth = "1.588142";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([4.52, -0.127999]);
    path.lineTo([9.918, -0.127999]);
    path.strokeColor = new GrayColor(1);
    path.strokeWidth = "2.277218";
    path.moveTo([7.281, 12.544001]);
    path.cubicCurveTo([7.281, -6.455999], [7.316, 2.520001], [7.316, 2.520001]);
    path.strokeColor = new GrayColor(1);
    path.strokeWidth = "2.28715";
    path.moveTo([1.23, 5.536001]);
    path.cubicCurveTo([11.809, 5.536001], [13.188, 5.641001], [13.188, 5.641001]);
    path.strokeColor = new GrayColor(1);
    path.strokeWidth = "1.594655";
    path.moveTo([13.145, 2.872001]);
    path.lineTo([13.062, 8.395001]);
    path.strokeColor = new GrayColor(1);
    var path1 = new CompoundPath();
    var compoundPath = new CompoundPath([path,path1]);
    compoundPath.style = {strokeJoin: miter,strokeWidth: 1.594655,strokeCap: butt,miterLimit: 4};
    return {name:"eris1",width:15, height:27,path:compoundPath};
}
