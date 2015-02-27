//self.mat.cssFilter = function (opts) {
//    var delay = utils.normalizeTimeToMilliSeconds(opts.delay || 0); // Normalize time to mS
//    var after_func = opts.then || undefined;
//
//    // Just supported on iOS >= 6.0 for now
//    // TODO: Do proper browser detection
//    var supportsCSSFilters = window.userOS === "iOS";
//    //	(window.userOSver === "6.0" || window.userOSver === "6.1");
//
//    if (supportsCSSFilters) {
//        var cssFiltersString = "";
//        for (var prop in opts) {
//            if (opts.hasOwnProperty(prop)) {
//                switch (prop) {
//                    case "blur":
//                        cssFiltersString += "blur(" + opts[prop] + "px) ";
//                        break;
//                    case "invert":
//                        cssFiltersString += "invert(" + opts[prop] + "%) ";
//                        break;
//                    case "grayscale":
//                        cssFiltersString += "grayscale(" + opts[prop] + "%) ";
//                        break;
//                    case "brightness":
//                        cssFiltersString += "brightness(" + opts[prop] + "%) ";
//                        break;
//                    case "contrast":
//                        cssFiltersString += "contrast(" + opts[prop] + "%) ";
//                        break;
//                    case "hueRotate":
//                        cssFiltersString += "hueRotate(" + opts[prop] + "deg) ";
//                        break;
//                    case "sepia":
//                        cssFiltersString += "sepia(" + opts[prop] + "%) ";
//                        break;
//                }
//            }
//        }
//
//
//        if (cssFiltersString !== "") {
//            $(self.mat.view).css("-webkit-filter", cssFiltersString);
//        }
//    }
//
//    return self.mat;
//};
//
//self.mat.removeCssFilter = function () {
//    $(self.mat.view).css("-webkit-filter", "");
//    return self.mat;
//};


//        element.style.opacity = Math.random() * 0.20 + 0.80;
//        element.style.webkitFilter = "sepia(" + 100 + "%)";
var cardFilter = "brightness(" + Math.random() * 30 + 1 + "%) ";
//        cardFilter = "hueRotate(" + Math.random() * 50 + 150 + "deg) ";

//        element.style.webkitFilter = cardFilter;
//        element.style.webkitFilter = "blur(" + Math.random() * 10 + "px) ";

//        element.setAttribute("style","-webkit-filter:grayscale(" + 100 + "%)");
//        documentElement.style.webkitFilter=’invert() saturate(50%25)’
//        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
//        console.log(element.style.backgroundImage);