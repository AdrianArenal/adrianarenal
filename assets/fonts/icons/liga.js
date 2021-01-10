/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'minus': '&#xe903;',
            'terminal': '&#xe906;',
            'arrowright': '&#xe904;',
            'arrowdown': '&#xe905;',
            'arrowleft': '&#xe902;',
            'developer': '&#xe900;',
            'designer': '&#xe901;',
            'file': '&#xe926;',
            'folder': '&#xe92f;',
            'directory': '&#xe92f;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'list': '&#xe9ba;',
            'todo': '&#xe9ba;',
            'notification': '&#xea08;',
            'warning': '&#xea08;',
            'facebook': '&#xea91;',
            'instagram': '&#xea92;',
            'linkedin': '&#xeac9;',
            'git': '&#xeae7;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/adricon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());