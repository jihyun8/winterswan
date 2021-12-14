$(document).ready(function() {
        // a href='#' 클릭 무시 스크립트
        $('a[href="#"]').click(function(ignore) {
            ignore.preventDefault();
        });
    });


$(document).ready(function(){
	$('.gal1').fadeOut(0);
	$('.gal1_img').click(function(){
		$('.gal1').fadeIn(500);
	});
	$('.gal1 p a').click(function(){
		$('.gal1').fadeOut(500);
	});
});

$(document).ready(function(){
	$('.gal2').fadeOut(0);
	$('.gal2_img').click(function(){
		$('.gal2').fadeIn(500);
	});
	$('.gal2 p a').click(function(){
		$('.gal2').fadeOut(500);
	});
});

$(document).ready(function(){
	$('.gal3').fadeOut(0);
	$('.gal3_img').click(function(){
		$('.gal3').fadeIn(500);
	});
	$('.gal3 p a').click(function(){
		$('.gal3').fadeOut(500);
	});
});

$(document).ready(function(){
	$('.gal4').fadeOut(0);
	$('.gal4_img').click(function(){
		$('.gal4').fadeIn(500);
	});
	$('.gal4 p a').click(function(){
		$('.gal4').fadeOut(500);
	});
});

$(document).ready(function(){
	$('.gal5').fadeOut(0);
	$('.gal5_img').click(function(){
		$('.gal5').fadeIn(500);
	});
	$('.gal5 p a').click(function(){
		$('.gal5').fadeOut(500);
	});
});

$(document).ready(function(){
	$('.gal6').fadeOut(0);
	$('.gal6_img').click(function(){
		$('.gal6').fadeIn(500);
	});
	$('.gal6 p a').click(function(){
		$('.gal6').fadeOut(500);
	});
});


$(document).ready(function(){
	$('.p1').click(function(){
		$('.ver1').fadeIn(0);
		$('.ver2').fadeOut(0);
		$('.ver3').fadeOut(0);
	});
});
$(document).ready(function(){
	$('.p2').click(function(){
		$('.ver2').fadeIn(0);
		$('.ver1').fadeOut(0);
		$('.ver3').fadeOut(0);
	});
});
$(document).ready(function(){
	$('.p3').click(function(){
		$('.ver3').fadeIn(0);
		$('.ver1').fadeOut(0);
		$('.ver2').fadeOut(0);
	});
});


$( document ).ready( function() {
        var jbOffset = $( '.nav' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > 229) {
            $( '.nav' ).addClass( 'on1' );
          }
          else {
            $( '.nav' ).removeClass( 'on1' );
          }
        });
      });
$( document ).ready( function() {
        var jbOffset = $( '.m_nav' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > 0) {
            $( '.m_nav' ).addClass( 'on1' );
          }
          else {
            $( '.m_nav' ).removeClass( 'on1' );
          }
        });
      });