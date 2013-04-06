function saturn(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([3.91, -0.188001]);
    path.lineTo([3.91, 23.010999]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([-0.004, 3.611999]);
    path.lineTo([9.598, 3.611999]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([15.113, 27.811999]);
    path.cubicCurveTo([14.312, 28.611999], [13.512, 29.408999], [12.711, 29.408999]);
    path.cubicCurveTo([11.91, 29.408999], [10.312, 28.611999], [10.312, 27.010999]);
    path.cubicCurveTo([10.312, 25.408999], [11.113, 23.811999], [12.711, 22.209999]);
    path.cubicCurveTo([14.312, 20.611999], [15.91, 17.408999], [15.91, 14.209999]);
    path.cubicCurveTo([15.91, 11.010999], [14.312, 7.811999], [11.113, 7.811999]);
    path.cubicCurveTo([8.086, 7.811999], [5.512, 9.408999], [3.91, 12.611999]);
    path.strokeColor = new GrayColor(1);
    return {name:"saturn",width:18, height:31,path:path};
}
