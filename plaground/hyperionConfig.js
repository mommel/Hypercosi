(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.HyperionConfig = factory());
}(this, (function () { 'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var HyperionConfig =
    /*#__PURE__*/
    function () {
        function HyperionConfig() {
            _classCallCheck(this, HyperionConfig);
        }
        const configObject = {
            screen: {
                size: 65, // The size of the screen in inches
                width: 1450, // The width of the screen in mm
                height: 800, // The height of the screen in mm
            },
            leds: { 
                type: 'WS2812B', // LED type
                lpm: { // LEDs per meter
                    // All facing from the back of the screen
                    top: 60,
                    left: 30,
                    right: 30,
                    bottom: {
                        bottomLeft: 0,
                        bottomRight: 0,
                    }
                },
                powersupply: {
                    voltage: 5, // Volts of the power unit
                    ampere: 20, // Ampere of the power unit

                },
                amount: { // All facing from the back of the screen
                    top: 50, // Amount of Leds on the top
                    left: 14, // Amount of Leds on the left
                    right: 15,  // Amount of Leds on the right
                    bottom: { // If no wallmount some screens need a gap for the foot
                        bottomLeft: 0, // The amount of Leds on the left part of the bottom
                        bottomRight: 0, // The amount of Leds on the right of the bottom 
                        bottomGap: 0, // The amount of the left out Leds matching the sice of the gap
                    } 
                }
            },
            videoScanner: { // All facing from the back of the screen
                // cols - the left and right leds
                width: 4, // % of screenwidth
                marginLeft: 0, // % of screenwidth distance from the left edge
                marginRight: 0, // % of screenwidth distance from the right edge
                paddingTop: 0, // % of screeheight  distance from top
                paddingBottom: 0, // % of screeheight  distance from bottom
                // rows - the top and bottom leds
                height: 4, // % of screenheight
                marginTop: 0, // % of screeheight  distance from top
                marginBottom: 0, // % of screeheight  distance from bottom
                paddingLeft: 0, // % of screenwidth distance from the left edge
                paddingRight: 0, // % of screeheight  distance from bottom
                clockwise: true, // The Stripe counts clockwise, or not
                firstled: 0. // Offset of the first LED (Bottom Left Backfacing ) to the real first LED
            },
        }
    }
    return HyperionConfig;
})))