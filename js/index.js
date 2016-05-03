window.onload=function(){	
	var banimg=getClass("banner-box")[0].getElementsByTagName("li");
	var btns=getClass("btn")[0].getElementsByTagName("li");
	var banbig=getClass("banbig")[0].getElementsByTagName("li");
	//console.log(btns)
	var index=0;//初始时间
	var t=setInterval(wheel,2000);
    function wheel(){
    	index++;
    	if(index>banimg.length-1){
    		index=0;
    	}
    	for (var i = 0; i < banimg.length; i++) {
         animate(banimg[i],{opacity:0});
         animate(banbig[i],{opacity:0});
         btns[i].style.cssText="border:2px solid #A2A2A2;background:#A2A2A2;opacity:0.4";
    	};
      animate(banimg[index],{opacity:1});
      animate(banbig[index],{opacity:1});
      btns[index].style.cssText="background:#fff;opacity:0.7";
    }
    var bannerbox=getClass("bannerbox")[0];
    bannerbox.onmouseover=function(){
    	clearInterval(t);
    }
    bannerbox.onmouseout=function(){
    	t=setInterval(wheel,2000);
    }
    for (var i = 0; i < btns.length; i++) {
    	btns[i].index=i;
    	btns[i].onmouseover=function(){
             for (var j = 0; j < btns.length; j++) {
                  animate(banimg[j],{opacity:0});
                  animate(banbig[j],{opacity:0});
                 	btns[j].style.cssText="border:2px solid #A2A2A2;background:#A2A2A2;opacity:0.4"    	
             };
             animate(banimg[this.index],{opacity:1});
             animate(banbig[this.index],{opacity:1});
             btns[this.index].style.cssText="background:#fff;opacity:0.7";
    	}
    };
    
    // 选项卡事件
    var as=getClass("pinpai-title-right")[0].getElementsByTagName("a");
	  var pinpais=getClass("pinpai-content-right")[0].getElementsByTagName("li");
	  //console.log(as);
	  for (var i = 0; i < as.length; i++) {
		as[i].index=i;
		as[i].onclick=function(){
               for (var j = 0; j < as.length; j++) {
               	      pinpais[j].style.display="none";
                      as[j].className="";
               };
               pinpais[this.index].style.display="block";
               as[this.index].className="style-a";
		     }
	  };

    // 头部缩小框
    var head=getClass("head-tu")[0];
    // console.log(head);
    var headX=getClass("head-top")[0].getElementsByTagName("span")[0];
    headX.onclick=function(){
        head.style.display="none";
    }

    // 光标事件
    var guangB=getClass("kuang-left")[0];
    // console.log(guangB);
    var value=guangB.placeholder;
    guangB.onfocus=function(){
      if(value==this.placeholder){
         this.placeholder="";
      }     
    }
    guangB.onblur=function(){
        if(this.placeholder==""){
           this.placeholder=value;
        }
        
    }
}


