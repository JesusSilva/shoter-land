window.onload = function() {
    document.getElementById("start-button").onclick = function() {
            $(".home").hide();
            $(".game").show();
            $("#start-button").hide();
    };
}