function quintile(){
    var path = new CompoundPath();
    path.strokeWidth = "4.8";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([29.301, 16.880002]);
    path.cubicCurveTo([29.301, 25.416002], [23.277, 32.330002], [15.852, 32.330002]);
    path.cubicCurveTo([8.422, 32.330002], [2.402, 25.416002], [2.402, 16.880002]);
    path.cubicCurveTo([2.402, 8.349002], [8.422, 1.431002], [15.852, 1.431002]);
    path.cubicCurveTo([23.277, 1.431002], [29.301, 8.349002], [29.301, 16.880002]);
    path.closePath();
    path.moveTo([29.301, 16.880002]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([16.664, 20.931002]);
    path.lineTo([29.793, 33.298002]);
    path.strokeColor = new GrayColor(1);
    return {name:"quintile",width:32, height:37,path:path};
}
