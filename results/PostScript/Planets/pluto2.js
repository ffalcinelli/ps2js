function pluto2(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([17.988, 26.805]);
    path.lineTo([1.188, 26.805]);
    path.lineTo([1.188, 1.203]);
    path.lineTo([11.59, 1.203]);
    path.cubicCurveTo([11.59, 1.203], [17.188, 2.004], [17.188, 7.605]);
    path.cubicCurveTo([17.188, 13.203], [11.59, 14.004], [11.59, 14.004]);
    path.lineTo([1.188, 14.004]);
    path.strokeColor = new GrayColor(1);
    return {name:"pluto2",width:19, height:28,path:path};
}
