function lilith(){
    var path = new CompoundPath();
    path.moveTo([11.199, 0.4]);
    path.cubicCurveTo([8.27, 0.4], [5.355, 1.521], [3.281, 3.447]);
    path.cubicCurveTo([1.207, 5.373], [0.0, 8.076], [0.0, 10.798]);
    path.cubicCurveTo([0.0, 13.521], [1.207, 16.228], [3.281, 18.154]);
    path.cubicCurveTo([5.355, 20.08], [8.27, 21.201], [11.199, 21.201]);
    path.cubicCurveTo([7.324, 19.107], [4.785, 14.994], [4.785, 10.798]);
    path.cubicCurveTo([4.785, 6.607], [7.324, 2.494], [11.199, 0.4]);
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([4.801, 17.202]);
    path.lineTo([4.801, 29.202]);
    path.moveTo([0.0, 23.6]);
    path.lineTo([9.602, 23.6]);
    path.strokeColor = new GrayColor(1);
    return {name:"lilith",width:12, height:30,path:path};
}
