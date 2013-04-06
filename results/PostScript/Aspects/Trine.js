function Trine(){
    var path = new CompoundPath();
    path.strokeWidth = "4.8";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([3.879, 37.109]);
    path.lineTo([35.879, 37.109]);
    path.lineTo([19.879, 5.109]);
    path.closePath();
    path.moveTo([3.879, 37.109]);
    path.strokeColor = new GrayColor(1);
    return {name:"Trine",width:40, height:40,path:path};
}
