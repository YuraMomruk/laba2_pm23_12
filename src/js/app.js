Exit1.onclick=function(){
    SiteStatics.style.display='none';
    SiteStaticsBoxstyle.display='none';
}
Exit2.onclick=function(){
    WorldMapBox.style.display='none';
}
Exit3.onclick=function(){
    TudaySateBox.style.display='none';
}
ReportBoxExit.onclick=function(){
    ReportBox.style.display='none';
}
Exit4.onclick=function(){
    UsersTrendBox.style.display='none';
}

let Numbers = 0;
$('.CelendarItem').attr('Number', false);

$('.CelendarItem').click(function (e) {
    let Number = $(this).attr('Number');
    if (Number == "false") {
        $(this).css('background-color', '#9b59b6');
        $(this).attr('Number', true);
        Numbers++;
    } else {
        $(this).css('background-color', '#8e44ad');
        $(this).attr('Number', false);
        Numbers--;
    }
});

