var apply_filter = function(pixel) {
    var sheet = document.styleSheets[0];
    sheet.addRule("html", "-webkit-filter: blur("+pixel+"px);!important;", 1);
};

apply_filter(2);
