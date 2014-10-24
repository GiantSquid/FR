function scrollTo(target){
        var speed = 1000;
        var top = $('#' + target).offset().top;
        $('html, body').animate({scrollTop: top}, speed);
}

function init() {
	var initClr = $( '.btn_init_state' ).attr( 'data-pclr' );
	$( '.btn_init_state' ).css( 'background-color', initClr );
	$( '.btn_init_state' ).css( 'color', '#fff' );
	scrollTo( 'p1' );
	
	$( '.sld1' ).css( 'opacity', '1' );
}

$( '.nav_btn' ).click(function() {
	
	$( 'body' ).off( 'waypoint', '.page' );
	
      $( '.nav_btn' ).css( 'color', '#000' );
	  $( '.nav_btn' ).css( 'background-color', 'rgba(0, 0, 0, 0)' );
	
	var scrollTarget = $( this ).attr( 'data-target' );
	var btnClr = $( this ).attr( 'data-pclr' );
	
      $( this ).css( 'color', '#fff' );
	  $( this ).css( 'background-color', btnClr );
	
	scrollTo( scrollTarget );
	
	$( 'body' ).on( 'waypoint', '.page' );

});

/*$( '.page' ).waypoint(function(direction) {
	var vp = $( this ).attr('id');
	$( '.nav_btn' ).css( 'color', '#000' );
	$( '.nav_btn' ).css( 'background-color', 'rgba(0, 0, 0, 0)' );
	
	var curBtn = $( '.' + vp );
	var curBtnClr = curBtn.attr( 'data-pclr' );
	curBtn.css( 'background-color', curBtnClr );
	curBtn.css( 'color', '#fff' );
});*/

$( '.slide_btn' ).click(function() {
	
	$( '.slb_cur' ).removeClass( 'slb_cur' );
	$( this ).addClass( 'slb_cur' );
	
	var TgtSld = $( this ).attr( 'data-bind' );
	
	$( '.slide' ).css( 'opacity', '0' );
	$( '.' + TgtSld ).css( 'opacity', '1' );
	
	console.log( TgtSld );

});