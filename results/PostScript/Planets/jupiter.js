function jupiter(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([17.918, 0.502]);
    path.lineTo([17.918, 26.948]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([22.277, 20.166]);
    path.lineTo([1.211, 20.166]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([3.391, 9.995]);
    path.cubicCurveTo([2.664, 9.995], [1.211, 9.319], [1.211, 6.604]);
    path.cubicCurveTo([1.211, 3.893], [4.117, 1.182], [7.023, 1.182]);
    path.cubicCurveTo([9.93, 1.182], [12.836, 3.217], [12.836, 7.963]);
    path.cubicCurveTo([12.836, 12.709], [9.203, 20.166], [1.938, 20.166]);
    path.strokeColor = new GrayColor(1);
    return {name:"jupiter",width:23, height:27,path:path};
}
