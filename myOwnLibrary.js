function hasCollided(obj1,obj2){
bulletright=obj1.x+obj1.width/2;
wallleft=obj2.x-obj2.width/2
if(bulletright>wallleft){

return true
}
return false

}











