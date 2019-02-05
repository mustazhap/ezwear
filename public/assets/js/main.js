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
     $(".icon-menu").click(function(event){
        if($(this).hasClass("icon-menu")){
        $(".mob_menu").css({"visibility":"visible"});
        $(this).removeClass();
        $(this).addClass("icon-cancel2");
        }else{
            $(this).removeClass();
            $(this).addClass("icon-menu");
            $(".mob_menu").css({ "visibility":"hidden"});
        }
        event.stopPropagation();
    })
    $(".mob_menu").click(function(event){
        event.stopPropagation();
    })
    $("body").click(function(){
        $(".mob_menu").css({"visibility":"hidden"});
        $(".icon-cancel2").removeClass().addClass("icon-menu");
    })
        
    $(".input_numb").on("change paste keyup", function() {
        if($(this).val() > 99){
            $(this).addClass("ez-error")
        }else{
            $(this).removeClass("ez-error")

        }
     });

     $('.input_numb').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^0-9]/g,'') ); }
    );
    
    



  // Menu
  $(".jobs__menu").click(function(){
    if($(this).hasClass("animated")){
      $(".sidebar").css("left", "0");
        if (w > 600){
        $(this).css("left","360px").removeClass("animated").find("i").css("transform", "rotate(180deg)");
        }else{
            $(this).css({"left":"90%"}).removeClass("animated").find("i").css("transform", "rotate(180deg)");
            $("body").css("overflow","hidden");
        }
    }else{
      // $("body").css("overflow-x", "visible");
      $(".sidebar").css("left", "-100%");
      $("body").css("overflow","auto");
      // $(".jobs").css({"position": "relative", "left": "0px"});
      $(this).css("left","15px").addClass("animated").find("i").css("transform", "rotate(0)");  
    }
  });
// 


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

// 


// Textarea
$(".textarea").click(function(event){
    if($(".contact__mail").css("right") == "10px"){
        $(".contact__mail").css({"opacity":"0", "visibility":"hidden"});
    }
    $(document).click(function() {
        $(".contact__mail").css({"opacity":"1", "visibility":"visible"});
    });
})

// 

// File Upload
$( '.file' ).each( function()
	{
		var $input	 = $( this ),
			$label	 = $input.next( 'label' ),
			labelVal = $label.html();

		$input.on( 'change', function( e )
		{
			var fileName = '';

			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				$label.find( 'span' ).html( fileName );
			else
				$label.html( labelVal );
		});

		// Firefox bug fix
		$input
		.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });
// 

// Popup - Apply for Job

    $(".apply-button").click(function(){
        $(".apply").show().css("display", "flex");
        $("body").css("overflow", "hidden");
    });
    $(".apply__wrapper").click(function(event){
        event.stopPropagation();        
    });
    $(".fa-times").click(function(){
        $(".apply").hide();
        $("body").css("overflow", "auto");
        
    });
    $(".apply").click(function(){
        $(".apply").hide();
        $("body").css("overflow", "auto");

    });
});
// 

// Spoiler
$(".spoiler__title").click(function(){
    $(this).toggleClass("spoiler__title-active");
    $(this).next().slideToggle();
})

// 

// Filter
$(".filter-show").click(function(){
    $(".search__col").slideToggle();
});

$(".filter-cancel").click(function(){
    $(".search__col").slideToggle();
});


