function mars(){
    var path = new CompoundPath();
    path.strokeWidth = "2.64";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([17.137, 8.378697]);
    path.cubicCurveTo([15.207, 6.851697], [12.684, 6.097697], [10.234, 6.312697]);
    path.cubicCurveTo([7.781, 6.527697], [5.43, 7.706697], [3.793, 9.542697]);
    path.cubicCurveTo([2.156, 11.382697], [1.258, 13.855697], [1.332, 16.312697]);
    path.cubicCurveTo([1.402, 18.773697], [2.449, 21.191697], [4.188, 22.929697]);
    path.cubicCurveTo([5.926, 24.667697], [8.344, 25.714697], [10.805, 25.784697]);
    path.cubicCurveTo([13.262, 25.859697], [15.734, 24.960697], [17.574, 23.324697]);
    path.cubicCurveTo([19.41, 21.687697], [20.59, 19.335697], [20.805, 16.882697]);
    path.cubicCurveTo([21.02, 14.433697], [20.262, 11.909697], [18.738, 9.980697]);
    path.closePath();
    path.moveTo([17.137, 8.378697]);
    path.lineTo([17.938, 9.179697]);
    path.lineTo([26.738, 0.378697]);
    path.moveTo([19.539, 0.378697]);
    path.lineTo([26.738, 0.378697]);
    path.lineTo([26.738, 7.577697]);
    path.strokeColor = new GrayColor(1);
    return {name:"mars",width:29, height:29,path:path};
}
