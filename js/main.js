/* Volunteer-2 start */
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 59;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "More...";
    var lesstext = "Less...";
    

    $('.text-more').each(function(index) {
      console.log(index)
        var content = $(this).html();
        console.log(content.length)
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            console.log(c)
            console.log(h)
            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span style="display: none;">'
             + h + '</span>&nbsp;&nbsp;<a href="" class="text-morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".text-morelink").click(function(){
        console.log($(this))
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
       if($(this).closest('.content').css("height") == '352px'){
        $(this).closest('.content').css("height", '552')
       }else{
        $(this).closest('.content').css("height", '352')
       }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();    
        return false;
    });
    // Configure/customize these variables.
    var showChar = 219;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "More...";
    var lesstext = "Less...";
    

    $('.home-text-more').each(function(index) {
      console.log(index)
        var content = $(this).html();
        console.log(content.length)
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            console.log(c)
            console.log(h)
            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span style="display: none;">'
             + h + '</span>&nbsp;&nbsp;<a href="" class="home-text-morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".home-text-morelink").click(function(){
        console.log($(this))
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();    
        return false;
    });
    // Configure/customize these variables.
    var showChar = 172;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "More...";
    var lesstext = "Less...";
    

    $('.event-text-more').each(function(index) {
      console.log(index)
        var content = $(this).html();
        console.log(content.length)
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            console.log(c)
            console.log(h)
            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span style="display: none;">'
             + h + '</span>&nbsp;&nbsp;<a href="" class="event-text-morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".event-text-morelink").click(function(){
        console.log($(this))
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();    
        return false;
    });
});

