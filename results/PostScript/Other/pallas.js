function pallas(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([10.488, 18.993001]);
    path.lineTo([1.688, 10.192001]);
    path.lineTo([10.488, 1.391001]);
    path.lineTo([19.289, 10.192001]);
    path.closePath();
    path.moveTo([10.488, 18.993001]);
    path.lineTo([10.488, 29.391001]);
    path.moveTo([5.688, 24.595001]);
    path.lineTo([15.289, 24.595001]);
    path.strokeColor = new GrayColor(1);
    return {name:"pallas",width:21, height:30,path:path};
}
