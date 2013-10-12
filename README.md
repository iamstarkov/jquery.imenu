jquery.imenu
============================================================

jquery.imenu — best adaptive menu ever!

## Features

* Simple as holy fuck!
* Responsive (shows as many columns as needed).
* Save mobile states (open or closed) througn switching.
* Only 2 KB unminified (1.2 KB minified).


## Installation

Include jQuery and `jquery.imenu.min.js` onto your page:

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="jquery.imenu.min.js"></script>

## Options

    breakpoint: 600,
    debug: false,
    toggler: '.imenu__toggler',
    classes: {
        modes: [ 'imenu_mode_mobile', 'imenu_mode_desktop' ],
        states: [ 'imenu_mode_mobile-closed', 'imenu_mode_mobile-opened' ]
    }

* `breakpoint` *Pixels*, default: **600**  
    the switching point for imenu (in pixels). If window's width 
    less thanbreakpoint then imenu will decide that curent window is
    opened at mobile phone, and if else — at desktop.
* `debug` *Boolean*, default: **false**  
    if `true` will log important options, elems and important
    events.
* `toggler` (String) default: **'.imenu__toggler'**  
    Selector of toggler element of mobile version of menu.



## How does it work

jquery.imenu find the elements with `.imenu` class and executes on thme

