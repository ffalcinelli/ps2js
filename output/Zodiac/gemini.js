function gemini(){
    var path = new CompoundPath();
    path.moveTo([0.0, 188.0]);
    path.lineTo([0.0, 174.152]);
    path.cubicCurveTo([15.41, 170.086], [29.742, 167.184], [42.914, 165.609]);
    path.lineTo([42.914, 22.141]);
    path.cubicCurveTo([28.664, 20.816], [14.332, 18.078], [0.0, 13.934]);
    path.lineTo([0.0, 0.0]);
    path.cubicCurveTo([24.852, 6.883], [55.34, 10.367], [91.457, 10.367]);
    path.cubicCurveTo([127.66, 10.367], [158.148, 6.883], [183.0, 0.0]);
    path.lineTo([183.0, 13.934]);
    path.cubicCurveTo([168.586, 18.078], [154.254, 20.816], [140.004, 22.141]);
    path.lineTo([140.004, 165.609]);
    path.cubicCurveTo([153.176, 167.184], [167.508, 170.086], [183.0, 174.152]);
    path.lineTo([183.0, 188.0]);
    path.cubicCurveTo([154.668, 180.535], [124.18, 176.887], [91.457, 176.887]);
    path.cubicCurveTo([58.734, 176.887], [28.25, 180.535], [0.0, 188.0]);
    path.closePath();
    path.moveTo([59.562, 164.613]);
    path.cubicCurveTo([69.09, 163.535], [79.695, 163.039], [91.457, 163.039]);
    path.cubicCurveTo([103.223, 163.039], [113.824, 163.535], [123.352, 164.613]);
    path.lineTo([123.352, 23.305]);
    path.cubicCurveTo([114.738, 23.883], [104.133, 24.215], [91.457, 24.215]);
    path.cubicCurveTo([78.699, 24.215], [68.098, 23.883], [59.562, 23.305]);
    path.closePath();
    path.moveTo([59.562, 164.613]);
    path.fillColor = new GrayColor(1);
    return {name:"gemini",width:183, height:188,path:path};
}
