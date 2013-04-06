function eris2(){
    var path = new CompoundPath();
    path.strokeWidth = "4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "5";
    path.moveTo([34.0, 13.275002]);
    path.cubicCurveTo([34.0, 16.416002], [32.277, 19.541002], [29.312, 21.759002]);
    path.cubicCurveTo([26.352, 23.982002], [22.188, 25.275002], [18.0, 25.275002]);
    path.cubicCurveTo([13.812, 25.275002], [9.648, 23.982002], [6.688, 21.759002]);
    path.cubicCurveTo([3.723, 19.541002], [2.0, 16.416002], [2.0, 13.275002]);
    path.cubicCurveTo([2.0, 10.134002], [3.723, 7.009002], [6.688, 4.791002]);
    path.cubicCurveTo([9.648, 2.568002], [13.812, 1.275002], [18.0, 1.275002]);
    path.cubicCurveTo([22.188, 1.275002], [26.352, 2.568002], [29.312, 4.791002]);
    path.cubicCurveTo([32.277, 7.009002], [34.0, 10.134002], [34.0, 13.275002]);
    path.closePath();
    path.moveTo([34.0, 13.275002]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([18.0, 25.275002]);
    path.lineTo([18.0, 48.076002]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([4.801, 38.474002]);
    path.lineTo([18.0, 48.076002]);
    path.lineTo([31.199, 38.474002]);
    path.strokeColor = new GrayColor(1);
    return {name:"eris2",width:36, height:52,path:path};
}
