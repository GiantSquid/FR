$( '#feed' ).css( 'display', 'block' );

var activePan = {
	settings : function() {
		$( '.right_col' ).css( 'width', '60px' );
		$( '.left_col' ).css( 'width', '300px' );
		$( '.center_col' ).css( 'padding-left', '300px' );
		$( '.center_col' ).css( 'padding-right', '60px' );
		$( '.left_cont' ).delay( 400 ).show( 0 );
		$( '.right_cont' ).hide();
	},
	garments : function() {
		$( '.right_col' ).css( 'width', '300px' );
		$( '.left_col' ).css( 'width', '60px' );
		$( '.center_col' ).css( 'padding-left', '60px' );
		$( '.center_col' ).css( 'padding-right', '300px' );
		$( '.right_cont' ).delay( 400 ).show( 0 );
		$( '.left_cont' ).hide();
	}
}

$( '.col_btn' ).click(function () {
	  $( '.col_btn' ).css( 'color', 'rgba(256, 256, 256, 0.6)' );
	  $( '.col_btn' ).css( 'background-color', 'rgba(0, 0, 0, 0)' );
      $( this ).css( 'color', '#292929' );
	  $( this ).css( 'background-color', 'rgba(256, 256, 256, 0.6)' );
	  $( '.col_content_inner' ).css( 'display', 'none' );
	  var btnAct = $( this ).attr( 'title' );
	  $( '#' + btnAct ).css( 'display', 'block' );
	  var clrTheme = $( '#' + btnAct ).attr( 'data-clr' );
	  $( '.left_col' ).css( 'background-color', clrTheme );
	  $( '.right_col' ).css( 'background-color', clrTheme );
    });