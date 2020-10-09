$(function() {

    $("div .textpreview").each(function (index) {
        $(this).hover(function (e) {

                var text = $( this).html();
                alert(text);
                if(text.length < 36) return;

                $("body").append("<p id='textpreview' style='position:absolute; display:none; background-color: #FFF; padding: 10px; border: 1px dashed #c2cad1;'>" + text + "</p>");
                $("#textpreview")
                    .css("top", (e.pageY - 10) + "px")
                    .css("left", (e.pageX + 30) + "px")
                    .fadeIn("slow");
            },
            function () {
                $("#textpreview").remove();
            }
        );

        $(this).mousemove(function (e) {
            $("#textpreview")
                .css("top", (e.pageY - 10) + "px")
                .css("left", (e.pageX + 30) + "px");
        });
    });

    $("div .textpreviewbrutto").each(function (index) {
        $(this).hover(function (e) {

                var text = $(this).children().html();

                $("body").append("<p id='textpreview' style='position:absolute; display:none; background-color: #FFF; padding: 10px; border: 1px dashed #c2cad1; font-weight: bold;'>" + text + "</p>");
                $("#textpreview")
                    .css("top", (e.pageY - 10) + "px")
                    .css("left", (e.pageX + 30) + "px")
                    .fadeIn("slow");
            },
            function () {
                $("#textpreview").remove();
            }
        );

        $(this).mousemove(function (e) {
            $("#textpreview")
                .css("top", (e.pageY - 10) + "px")
                .css("left", (e.pageX + 30) + "px");
        });
    });

});

