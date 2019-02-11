(function(window) {
    var encoded = "cmrveo.o:oeroaiebtrkelks@minl;1A1C0817071B1905060E100D150102180C04120A13160F140B00091103".split(";");
    var decoded = new Array(encoded[0].length);
    for (var i=0, j=decoded.length; i < j; i++) {
        decoded[parseInt(encoded[1].substr(i * 2, 2), 16)] = encoded[0][i];
    }

    window.addEventListener("load", function() {
        var links = document.querySelectorAll("a");
        for (var i=0, j=links.length; i < j; i++) {
            var link = links[i];
            if (link.parentElement.classList.contains("email")) {
                link.href = decoded.join("");
            } else {
                link.target = "_blank";
            }
            link.addEventListener("focus", function() {this.parentElement.classList.add("focused");});
            link.addEventListener("focusout", function() {this.parentElement.classList.remove("focused");});
        }
    });

})(window);