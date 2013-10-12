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

```html
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="jquery.imenu.min.js"></script>
```


## Options

    breakpoint: 600,
    debug: false,
    toggler: '.imenu__toggler',
    classes: {
        modes: [ 'imenu_mode_mobile', 'imenu_mode_desktop' ],
        states: [ 'imenu_mode_mobile-closed', 'imenu_mode_mobile-opened' ]
    }


## How does it work

jquery.imenu find the elements with `.imenu` class and executes on thme

