//搜索框
$.fn.UiSearch=function(){
    var ui=$('header .search');
    $('header #find').on('click',function(){
        ui.css('z-index',5);
    });
    $('#close').on('click',function(){
        ui.css('z-index',-1);
    });
}
//滚轮轮播
$.fn.UiBackTop = function(){
    var ui=$('.bannerSearch .index');
    var whole=$('section .bannerWhole');
    whole.on('move_to',function(evt,index){
        ui.removeClass('focus').eq(index).addClass('focus');
        switch(index){
        case 0 :whole.css('top',0);
        break;
        case 1 :whole.css('top',-759);
        break;
        case 2 :whole.css('top',-1513);
        break;
        default:
        break;
        console.log(whole.css('top'))
        }

    })
    ui.on('click',function(){
        var index = $(this).index();
        console.log(index);
			whole.triggerHandler('move_to',index);
	})
    
};
//函数调用
$(function(){
    $().UiSearch();
    $().UiBackTop();
});