jquery.imenu
============================================================

jquery.imenu — best adaptive menu ever!

## Features

* Simple as holy fuck!
* Responsive (shows as many columns as needed).
* Save mobile states (open or closed) througn switching.
* Only 2 KB unminified (1.2 KB minified).


## Idea

The main idea behind *imenu* is `freedom`. Freedom is in enormous
flexibility, based on *simplicity* of implementation and in idea of
minimalism — jquery.imenu gives you excellent control to your menus,
but not dictates how does it should like. (also imenu have some css
tips and recommendations)

## Installation

Include jQuery and `jquery.imenu.min.js` onto your page:

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="jquery.imenu.min.js"></script>

## Options

Default options are equal to this object:

    {
        breakpoint: 600,
        debug: false,
        toggler: '.imenu__toggler',
        classes: {
            states: [ 'imenu_mode_mobile', 'imenu_mode_desktop' ],
            mobile_states: [ 'imenu_mode_mobile-closed', 'imenu_mode_mobile-opened' ]
        }
    }

* `breakpoint` *Pixels*, `600`  
    
    The switching point for imenu (in pixels). If window's width less
    breakpoint then imenu will decide that curent window is opened
    at mobile phone, and if else — at desktop.

* `debug` *Boolean*, `false`  

    If `true` will log important options, elems and important
    events.

* `toggler` *String*, `'.imenu__toggler'`  

    Selector of toggler element of mobile version of menu.

* `classes.states` *Array of two strings*, `[ 'imenu_state_mobile', 'imenu_state_desktop' ]`  
    
    Classes that used for reflecting main states of imenu-elements:
    mobile or desktop mode. The first class is used for mobile, and
    second for desktop versions. *At one time can be used only one of
    these classes, because imenu-elements cannot exists in both modes
    at one time.*

* `classes.mobile_states` *Array of two strings*, `[ 'imenu_state_mobile-closed', 'imenu_state_mobile-opened' ]`  

    Classes that used for reflecting sub-states of mobile state:
    opened or closed menu. The first class is used for closed menu,
    because default state of mobile menu is closed state. No one of
    these classes don't exists in desktop state, that's why you can
    use `.imenu_state_mobile-opened` selector and not be afraid to
    affect to desktop menu. *Current `mobile_state` class would be
    removed on switching to desktop and restored on switching back*

## How does it work

jquery.imenu find the elements with `.imenu` class and executes on thme

