function vesta(){
    var path = new CompoundPath();
    path.strokeWidth = "2.4";
    path.strokeCap = "butt";
    path.strokeJoin = "miter";
    path.miterLimit = "4";
    path.moveTo([10.434, 10.577293]);
    path.lineTo([15.91, 18.787293]);
    path.lineTo([21.383, 10.577293]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([0.0, 13.194293]);
    path.lineTo([8.0, 13.194293]);
    path.lineTo([16.0, 25.194293]);
    path.lineTo([24.0, 13.194293]);
    path.lineTo([32.0, 13.194293]);
    path.strokeColor = new GrayColor(1);
    path.moveTo([16.191, 10.159293]);
    path.cubicCurveTo([16.051, 9.323293], [17.438, 7.987293], [17.996, 5.580293]);
    path.cubicCurveTo([18.367, 3.983293], [17.023, 3.123293], [16.793, 2.526293]);
    path.cubicCurveTo([16.113, 0.764293], [16.969, -0.047707], [16.969, -0.809707]);
    path.strokeColor = new GrayColor(1);
    return {name:"vesta",width:33, height:29,path:path};
}
