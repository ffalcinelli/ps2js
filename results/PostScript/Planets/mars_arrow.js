function mars_arrow(){
    var path = new CompoundPath();
    path.strokeWidth = "2.64";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([17.137, 8.378697]);
    path.lineTo([17.938, 9.179697]);
    path.lineTo([26.738, 0.378697]);
    path.moveTo([19.539, 0.378697]);
    path.lineTo([26.738, 0.378697]);
    path.lineTo([26.738, 7.577697]);
    path.strokeColor = new GrayColor(1);
    return {name:"mars_arrow",width:29, height:29,path:path};
}
