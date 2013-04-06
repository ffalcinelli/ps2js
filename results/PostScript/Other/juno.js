function juno(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([10.691, -0.029]);
    path.lineTo([10.691, 29.963]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([5.891, 25.163]);
    path.lineTo([15.488, 25.163]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([0.0, 9.506]);
    path.lineTo([21.414, 9.506]);
    path.moveTo([3.441, 16.772]);
    path.lineTo([17.977, 2.241]);
    path.moveTo([3.441, 2.241]);
    path.lineTo([17.977, 16.772]);
    path.strokeColor = new GrayColor(1);
    return {name:"juno",width:22, height:30,path:path};
}
