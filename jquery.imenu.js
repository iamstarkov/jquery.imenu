/*
 * jquery.imenu — best state manager for your adaptive menu!
 * Author: @matmuchrapna
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

$.fn.imenu = function ( custom_options ) {

	function on_switch($elem, o, is_mobile) {
		if (is_mobile) {
			o.debug && console.log('desktop -> mobile');
			$elem.addClass(
				$elem.data('imenu-state')
			);
		} else {
			o.debug && console.log('mobile -> desktop');
			$elem.data(
				'imenu-state',
				o.classes.mobile_states[
					($elem.hasClass(o.classes.mobile_states[0])) ? 0 : 1
				]
			);
			$elem.removeClass( o.classes.mobile_states.join(' ') );
		}
	}

	function setting_states($elem, o) {
		$elem.removeClass(o.classes.states.join(' '));
		
		var is_mobile = $(window).width() < o.breakpoint;

		if ($elem.data('is_mobile') != is_mobile) {
			on_switch($elem, o, is_mobile);
		}
		$elem.data('is_mobile', is_mobile);


		$elem.addClass(o.classes.states[is_mobile ? 0 : 1]);
	}

	options = $.extend( {}, $.fn.imenu.options, custom_options );

	return this.each(function () {

		var $elem = $(this),
			o = $.extend( {}, options, $elem.data('imenu') );

		o.debug && console.log($elem, o);

		$elem.data('is_mobile', $(window).width() < o.breakpoint );

		setting_states($elem, o);
		$(window).resize(function() {
			setting_states($elem, o);
		});

		if ($elem.data('is_mobile')) {
			$elem.addClass(o.classes.mobile_states[0]);
		}
		$(o.toggler).on('click', function (event) {
			if ($elem.data('is_mobile')) {
				$elem.toggleClass( o.classes.mobile_states.join(' ') );
			}
			event.preventDefault();
		});


	});
};

$.fn.imenu.options = {
	breakpoint: 600,
	debug: false,
	toggler: '.imenu__toggler',
	classes: {
		states: [ 'imenu_state_mobile', 'imenu_state_desktop' ],
		mobile_states: [ 'imenu_state_mobile-closed', 'imenu_state_mobile-opened' ]
	}
};


(function () {
	var $a = $('.imenu');
	if (!$a[0]) return -1;
	$a.imenu();
})();

})( jQuery, window, document );