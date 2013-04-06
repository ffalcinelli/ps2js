function ouroboros(){
    var path = new CompoundPath();
    var path1 = new CompoundPath();
    var compoundPath = new CompoundPath([path,path1]);
    return {name:"ouroboros",width:493, height:493,path:compoundPath};
}
