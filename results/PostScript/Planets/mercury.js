function mercury(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([18.863, 14.962032]);
    path.cubicCurveTo([18.863, 19.841032], [14.91, 23.794032], [10.031, 23.794032]);
    path.cubicCurveTo([5.152, 23.794032], [1.199, 19.841032], [1.199, 14.962032]);
    path.cubicCurveTo([1.199, 10.087032], [5.152, 6.130032], [10.031, 6.130032]);
    path.cubicCurveTo([14.91, 6.130032], [18.863, 10.087032], [18.863, 14.962032]);
    path.closePath();
    path.moveTo([18.863, 14.962032]);
    path.strokeColor = new GrayColor(1);
    path.strokeWidth = "2.4";
    path.moveTo([17.527, -0.685968]);
    path.cubicCurveTo([17.133, 3.412032], [13.488, 6.415032], [9.387, 6.021032]);
    path.cubicCurveTo([5.832, 5.677032], [3.016, 2.861032], [2.676, -0.693968]);
    path.strokeColor = new GrayColor(1);
    path.strokeWidth = "2.4";
    path.moveTo([10.031, 23.763032]);
    path.lineTo([10.031, 33.365032]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([6.031, 29.365032]);
    path.lineTo([14.031, 29.365032]);
    path.strokeColor = new GrayColor(1);
    return {name:"mercury",width:21, height:35,path:path};
}
