var screenAnimateElement = {
	'.screen-1' : [
		'.screen-1__heading',
		'.screen-1__phone',
		'.screen-1__shadow',
	],
	'.screen-2' : [
		'.screen-2__heading',
		'.screen-2__phone',
		'.screen-2__subheading',
		'.screen-2__point_i_1',
		'.screen-2__point_i_2',
		'.screen-2__point_i_3',
	],
	'.screen-3' : [
		'.screen-3__heading',
		'.screen-3__phone',
		'.screen-3__subheading',
		'.screen-3__features',
	],
	'.screen-4' : [
		'.screen-4__heading',
		'.screen-4__subheading',
		'.screen-4__type__item_i_1',
		'.screen-4__type__item_i_2',
		'.screen-4__type__item_i_3',
		'.screen-4__type__item_i_4',
	],
	'.screen-5' : [
		'.screen-5__heading',
		'.screen-5__bg',
		'.screen-5__subheading',
	],

};
function setScreenAnimate(screenCls){
	//获取当前屏的元素(css选择器)，document.querySelector()获取的选择器包括#，.等符号，后面要用substr（）减掉
	var screen = document.querySelector(screenCls);
	// 需要设置动画的元素
	var animateElements = screenAnimateElement[screenCls];
	//是否有初始化子元素的样式
	var isSetAnimateClass = false;
	//当前屏幕下所有子元素的状态是DONE？
	var isAnimateDone = false;
	screen.onclick = function(){
		//初始化样式，增加 A A_init
		if(isSetAnimateClass === false){
			for(var i = 0;i<animateElements.length;i++){
				var element =document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				// console.log(element);
				// substr()截图字符串
				//element.setAttribute(添加指定的属性,赋予指定的值)
				element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
			}
			isSetAnimateClass = true;
			return ;
			
		}
		//切换所有 animateElements的 init ->done  A A_done
		if(isAnimateDone === false){
			for(var i= 0;i<animateElements.length;i++){
				var element =document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
			isAnimateDone = true;
			return ;
		}
		//切换所有 animateElements的 done ->init  A A_init
		if(isAnimateDone === true){
			for(var i= 0;i<animateElements.length;i++){
				var element =document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
			}
			isAnimateDone = false;
			return ;
		}
	}
}
for(k in screenAnimateElement){
	setScreenAnimate(k);
}
// setScreenAnimate('.screen-1');
// setScreenAnimate('.screen-2');