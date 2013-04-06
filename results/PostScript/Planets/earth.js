function earth(){
    var path = new CompoundPath();
    path.strokeWidth = "3.2";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([36.801, 18.599002]);
    path.cubicCurveTo([36.801, 28.322002], [28.922, 36.201002], [19.199, 36.201002]);
    path.cubicCurveTo([9.48, 36.201002], [1.602, 28.322002], [1.602, 18.599002]);
    path.cubicCurveTo([1.602, 8.880002], [9.48, 1.002002], [19.199, 1.002002]);
    path.cubicCurveTo([28.922, 1.002002], [36.801, 8.880002], [36.801, 18.599002]);
    path.closePath();
    path.moveTo([36.801, 18.599002]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([1.602, 19.799]);
    path.lineTo([36.801, 19.799]);
    path.moveTo([1.602, 18.599002]);
    path.lineTo([36.801, 18.599002]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([19.199, 1.002002]);
    path.lineTo([19.199, 36.201002]);
    path.strokeColor = new GrayColor(1);
    return {name:"earth",width:39, height:39,path:path};
}
