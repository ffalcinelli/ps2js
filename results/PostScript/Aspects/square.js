function square(){
    var path = new CompoundPath();
    path.strokeWidth = "4.8";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.strokeColor = new GrayColor(1);
    return {name:"square",width:39, height:39,path:path};
}
