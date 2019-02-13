 $(document).ready(function(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// slider on main
  $('.slider-owl').owlCarousel({
    loop:false,
    margin:0,
    dots: true,
    responsiveClass:true,
    mouseDrag: false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        700:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
        }
    }
})
var owl = $(".slider-owl");
owl.on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var src = $(property.target).find(".owl-item").eq(current).find(".ez-slider__video").length;
    if(src){
        $("#ez-slide-video")[0].play();
    }else{
        $("#ez-slide-video")[0].pause();
    }
});

// slider on popular

$('.popular-owl').owlCarousel({
    loop:false,
    margin:33,
    dots: false,
    responsiveClass:true,
    // mouseDrag: false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        650:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
        }
    }
})


// rating
if($("#new-rank1").length){

var starRating2 = raterJs( {
    max:5, 
    rating:4.4, 
    element:document.querySelector("#rater2"), 
    disableText:"Custom disable text!", 
    ratingText:"My custom rating text {rating}", 
    showToolTip:true, 
    rateCallback:function rateCallback(rating, done) {
        starRating2.setRating(rating); 
        starRating2.disable(); 
        done(); 
    }
}); 

var starRating2 = raterJs( {
    max:5, 
    rating:4.4, 
    element:document.querySelector(".rank1"), 
    disableText:"Custom disable text!", 
    ratingText:"My custom rating text {rating}", 
    showToolTip:true, 
    starSize: 12,
    rateCallback:function rateCallback(rating, done) {
        starRating2.setRating(rating); 
        starRating2.disable(); 
        done(); 
    }
}); 
var starRating2 = raterJs( {
    max:5, 
    rating:4.4, 
    element:document.querySelector(".rank2"), 
    disableText:"Custom disable text!", 
    ratingText:"My custom rating text {rating}", 
    showToolTip:true, 
    starSize: 12,
    rateCallback:function rateCallback(rating, done) {
        starRating2.setRating(rating); 
        starRating2.disable(); 
        done(); 
    }
}); 
var starRating2 = raterJs( {
    max:5, 
    rating:4.4, 
    element:document.querySelector(".rank3"), 
    disableText:"Custom disable text!", 
    ratingText:"My custom rating text {rating}", 
    showToolTip:true, 
    starSize: 12,
    rateCallback:function rateCallback(rating, done) {
        starRating2.setRating(rating); 
        starRating2.disable(); 
        done(); 
    }
}); 
var starRating2 = raterJs( {
    max:5, 
    rating:4.4, 
    element:document.querySelector(".rank4"), 
    disableText:"Custom disable text!", 
    ratingText:"My custom rating text {rating}", 
    showToolTip:true, 
    starSize: 12,
    rateCallback:function rateCallback(rating, done) {
        starRating2.setRating(rating); 
        starRating2.disable(); 
        done(); 
    }
}); 
var starRating2 = raterJs( {
    max:5, 
    rating:4.4, 
    element:document.querySelector(".rank5"), 
    disableText:"Custom disable text!", 
    ratingText:"My custom rating text {rating}", 
    showToolTip:true, 
    starSize: 12,
    rateCallback:function rateCallback(rating, done) {
        starRating2.setRating(rating); 
        starRating2.disable(); 
        done(); 
    }
}); 
    var starRating2 = raterJs( {
        max:5, 
        rating:4.4, 
        element:document.querySelector("#new-rank1"), 
        disableText:"Custom disable text!", 
        ratingText:"My custom rating text {rating}", 
        showToolTip:true, 
        starSize: 12,
        rateCallback:function rateCallback(rating, done) {
            starRating2.setRating(rating); 
            starRating2.disable(); 
            done(); 
        }
    }); 


    var starRating2 = raterJs( {
        max:5, 
        rating:4.4, 
        element:document.querySelector("#new-rank2"), 
        disableText:"Custom disable text!", 
        ratingText:"My custom rating text {rating}", 
        showToolTip:true, 
        starSize: 12,
        rateCallback:function rateCallback(rating, done) {
            starRating2.setRating(rating); 
            starRating2.disable(); 
            done(); 
        }
    }); 
}

if($("#item-rank1").length){
    var starRating2 = raterJs( {
        max:5, 
        rating:4.4, 
        element:document.querySelector("#item-rank1"), 
        disableText:"Custom disable text!", 
        ratingText:"My custom rating text {rating}", 
        showToolTip:true, 
        starSize: 16,
        rateCallback:function rateCallback(rating, done) {
            starRating2.setRating(rating); 
            starRating2.disable(); 
            done(); 
        }
    }); 
}

// popular items
$(".ez-popular__item").hover(function(){
    var a = $(this).find("img").attr("rel");
    var b = $(this).find("img").attr("src");
    $(this).find("img").attr("src", a);
    $(this).mouseleave(function(){
        $(this).find("img").attr("src", b);
    })
})

$(".ez-new__item").hover(function(){
    var a = $(this).find("img").attr("rel");
    var b = $(this).find("img").attr("src");
    $(this).find("img").attr("src", a);
    $(this).mouseleave(function(){
        $(this).find("img").attr("src", b);
    })
})

// Маска для телефона
$(".mask").mask("+7 (999) 999 99 99");

// popup
$(".ez-item__al").click(function(){ //popup call-button
    $(".ez-popup").show().css("display", "flex");
    $("body").css("overflow", "hidden");
})
$(".ez-popup__close").click(function(){ //popup close-button
    $("body").css("overflow", "auto");
    $(".ez-popup").hide();
})
$(".ez-popup").click(function(){ //popup hide on body
    $(this).hide();
    $("body").css("overflow", "auto");
})
$(".ez-popup__wrapper").click(function(event){ //popup not hide on text
    event.stopPropagation();
})
// popup-end

// submenu
$(".ez-submenu__button").click(function(event){ 
    $(this).toggleClass("ez-submenu_active");
    event.stopPropagation();
})

$("body").click(function(){
    $(".ez-submenu__button").removeClass("ez-submenu_active");
})

// Select menu

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
  
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
  
  });
  
  // hover on item

  $(".ez-thumb").hover(function(){
    var src = $(this).attr("src");
    $(".ez-img").attr("src", src);
  })

    // counter
    $(".ez-plus").click(function(){
        var num = parseInt($.trim($(".ez-counter").val()));

        if(num < 99){
            $(".ez-counter").val(++num)
        }
    })
    $(".ez-minus").click(function(){
        var num = parseInt($.trim($(".ez-counter").val()));
        if(num >0){
            $(".ez-counter").val(--num)
        }
    })
    
    // search
    $(".icon-search").click(function(event){
        if($(this).hasClass("icon-search")){
        $(".ez-header__search").css({"top":"80px", "visibility":"visible"});
        $(this).removeClass();
        $(this).addClass("icon-cancel1");
        }else{
            $(this).removeClass();
            $(this).addClass("icon-search");
            $(".ez-header__search").css({"top":"0", "visibility":"hidden"});
        }
        event.stopPropagation();
    })
    $(".ez-header__search").click(function(event){
        event.stopPropagation();
    })
    $("body").click(function(){
        $(".ez-header__search").css({"visibility":"hidden", "top":"0"});
        $(".icon-cancel1").removeClass().addClass("icon-search");
    })

     // search
    //  $(".icon-menu").click(function(event){
    //     if($(this).hasClass("icon-menu")){
    //     $(".mob_menu").css({"visibility":"visible"});
    //     $(this).removeClass();
    //     $(this).addClass("icon-cancel2");
    //     }else{
    //         $(this).removeClass();
    //         $(this).addClass("icon-menu");
    //         $(".mob_menu").css({ "visibility":"hidden"});
    //     }
    //     event.stopPropagation();
    // })
    // $(".mob_menu").click(function(event){
    //     event.stopPropagation();
    // })
    // $("body").click(function(){
    //     $(".mob_menu").css({"visibility":"hidden"});
    //     $(".icon-cancel2").removeClass().addClass("icon-menu");
    // })

    $(".mobmenu_button").click(function(){
        $(this).toggleClass("mobmenu_change");
        $(".mobmenu").toggleClass("mobmenu_open");
        $("body").toggleClass("mobmenu_forbody")
    })
        
    $(".input_numb").on("change paste keyup", function() {
        if($(this).val().length > 2){
            $(this).val() = substr($(this).val(),1,3);
        }else{
            $(this).removeClass("ez-error")

        }
     });

     $('.input_numb').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') ); }
    );
    



    // Hover
    $(".ez-help").hover(function(){
        $(".ez-p").css("visibility", "visible");
    })
    $(".ez-help").mouseleave(function(){
        $(".ez-p").css("visibility", "hidden");
    })
});
