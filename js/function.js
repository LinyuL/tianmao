function getClass(classname,obj){
	var obj=obj||document;    //逻辑表达式中的||（或）运算：当表达式左边元素是true的话，就不会执行后边，返回值为true；当表达式左边为false的时候，右边的值无论是true或是false，都回返回右边的值
	if(obj.getElementsByClassName){ //会隐式的调用布尔类型转换思想，如果可以获取到类名的话，就执行if里面的语句；如果不可以获取到类名的话，就是undefined，会调用布尔类型进行转换为false，就会执行else语句
        // console.log("支持");
		return obj.getElementsByClassName(classname);
	}else{
		// console.log("不支持");
		var arr=[];
		var alls=obj.getElementsByTagName("*");  //获取文档里面所有的标签名
		for (var i = 0; i < alls.length; i++) {
			 if(checkbox(alls[i].className,classname)){
			 	arr.push(alls[i]); 
			 }
		};
		return arr;
	}     
}
function checkbox(newarr,oldarr){
	  //"out box" 字符串，要将字符串转换为数组使用split
     var chlist=newarr.split(" ");  //字符串转换为数组的话，使用split，split有两个参数，第一个参数是按照什么分割为数组
     var flag=false;
     for (var i = 0; i < chlist.length; i++) {
     	   if(chlist[i]==oldarr){
                flag=true;
     	   }
     };
     return flag;
}