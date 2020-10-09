$(function() {


    var visible = [];
    var hidden = [];
    $(".datarowa.page").each(function () {
        if($(this).is(":visible")){
            visible.push($(this));
        }else{
            hidden.push($(this));
        }
    });

    function removeHighlighting(highlightedElements){
        highlightedElements.each(function(){
            var element = $(this);
            element.replaceWith(element.html());
        })
    }

    function addHighlighting(element, textToHighlight){
        var text = element.text();
        var highlightedText = '<em id="marker">' + textToHighlight + '</em>';
        var newText = text.replace(textToHighlight, highlightedText);

        element.html(newText);
    }

    $("#search").on("keyup", function() {
        var value = $.trim($(this).val());


        removeHighlighting($("#searchresult em"));
        removeHighlighting($("#searchresult2 em"));


        /*if(value.length === 0){
            alert(visible.length);
            hidden.each(function () {

                $(this).hide();
            });

            visible.each(function () {
                alert( $(this).html());
                $(this).show();
            });

            return;
        }*/
        $("li dl").each(function(index) {
            if (index !== 0) {
                var $row = $(this);
                var $tdElement = $row.find("#searchresult");
                var $tdElement2 = $row.find("#searchresult2");



                var id = $tdElement.text().toUpperCase();
                var id2 = $tdElement2.text().toUpperCase();

                var matchedIndex = id.indexOf(value.toUpperCase());
                var matchedIndex2 = id2.indexOf(value.toUpperCase());

                if (matchedIndex === -1 && matchedIndex2 === -1) {

                    $row.hide();
                }
                else {

                    addHighlighting($tdElement, value);
                    addHighlighting($tdElement2, value);
                    $tdElement.parents("li").show();
                    $tdElement2.parents("li").show();
                    $row.show();


                }

            }
        });

        if(value === null || value === ""){
            $(".page-item.jsPages.selected span").click();
        }
    });

    function Ascending_sort(a, b) {
        return ($(b).text().toUpperCase()) <
        ($(a).text().toUpperCase()) ? 1 : -1;
    }



});