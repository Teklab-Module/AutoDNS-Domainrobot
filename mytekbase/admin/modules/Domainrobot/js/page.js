$(function() {

    if($("#displaycount").length){
        var anzeigeProSeite = $("#displaycount").val().trim();
    }



    $(".display-item").each(function () {
        $(this).click(function () {
            if($(this).hasClass("nohover")){
                return;
            }


            setergebnis($(".display-link", this).text().trim());
            paginator.destroyPaginator();
            var totalPage = Math.ceil($(".datarowa").length / anzeigeProSeite);

            if(totalPage === 0){
                totalPage = 1;
            }
            paginator.initPaginator({
                'previousPage': 'Zurück',
                'nextPage': 'Weiter',
                'totalPage': totalPage,
                'triggerFunc': paginierung,
                'paginationClass': 'paginatorCustomClass'
            });

            $("#displaycount").val($(".display-link", this).text().trim());

            $(this).parents().find(".selected").removeClass("selected");
            $(this).addClass("selected");
            paginierung();

        });

    });



    function setergebnis(val){
        anzeigeProSeite = val ;
    }

    if($(".page").length){
        var i = 1;

        /*$(".page").each(function () {
            if(i > anzeigeProSeite){
                $(this).hide();
            }
            i++;
        });*/
        var totalPage = Math.ceil($(".datarowa").length / anzeigeProSeite);

        if(totalPage === 0){
            totalPage = 1;
        }
        paginator.initPaginator({
            'previousPage': 'Zurück',
            'nextPage': 'Weiter',
            'totalPage': totalPage,
            'triggerFunc': paginierung,
            'paginationClass': 'paginatorCustomClass'
        });
    }



    function paginierung() {

        var selectdPg = $('.js-paginator').data('pageSelected') * anzeigeProSeite;
        var anzeigen = selectdPg - anzeigeProSeite;
        if(anzeigen === 0){
            anzeigen = anzeigeProSeite;
        }
        var i = 1;
        $(".page").each(function () {
            if(selectdPg / anzeigeProSeite !== 1){

                if(i > anzeigen && i <= selectdPg){
                    $(this).show();
                }else{
                    $(this).hide();
                }
            }else{
                if(i > anzeigeProSeite){
                    $(this).hide();
                }else{
                    $(this).show();
                }
            }


            i++;

        });
    }

    if($("#deldomains").length > 0){
        $(".slider-text").text($(".actviedomain").length + " Aktive Domains");
        $("#switschcheckbox").show();
    }

    $("#showdeldomains").on("change", function () {
        if($(this).is(":checked")){

            $(".slider-text").text($(".inactviedomain").length + " Inaktive Domains");
            $("#domainsearch").hide();
            $("#activedomains").hide();
            $("#deldomains").show();
            $("input[name=inactvie]").val("checked")
        }else{
            $(".slider-text").text($(".actviedomain").length + " Aktive Domains");
            $("#domainsearch").show();
            $("#activedomains").show();
            $("#deldomains").hide();
            $("input[name=inactvie]").val("unchecked")
        }
    });

    if(GetURLParameter('save') == 2){
        $("#showdeldomains").click();
    }

    function GetURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
        return "NOTING";
    }
});
