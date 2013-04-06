function semisquare(){
    var path = new CompoundPath();
    path.strokeWidth = "4.8";
    path.strokeCap = "square";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([31.914, 30.888002]);
    path.lineTo([3.887, 30.888002]);
    path.lineTo([17.898, 2.861002]);
    path.strokeColor = new GrayColor(1);
    return {name:"semisquare",width:35, height:34,path:path};
}
