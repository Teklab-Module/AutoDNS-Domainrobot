$(function() {

    $.fn.removeClassStartingWith = function (filter) {
        $(this).removeClass(function (index, className) {
            return (className.match(new RegExp("\\S*" + filter + "\\S*", 'g')) || []).join(' ')
        });
        return this;
    };

    if($("#page-title h2").length){
        switch (GetURLParameter('ac')) {
            case "DomainOrder":
                $("div #page-title i ").removeClassStartingWith("icon-").addClass("icon-add_shopping_cart");
                $("#page-title h2").html($("#page-title h2").html() + " - Domainbestellung");
                break;
            case "DomainList":
                $("div #page-title i ").removeClassStartingWith("icon-").addClass("icon-domain");
                $("#page-title h2").html($("#page-title h2").html() + " - Domainliste");
                break;
            case "DomainSettings":
                $("div #page-title i").removeClassStartingWith("icon-").addClass("icon-settings");
                $("#page-title h2").html($("#page-title h2").html() + " - Allgemeine Einstellung");
                break;
            case "DomainEdit":
                if($("#origin").length){
                    var domain = $("#origin").html();
                }else{
                    var domain = "";
                }
                switch (GetURLParameter('bc')){
                    case "Settings":
                        $("#page-title h2").html($("#page-title h2").html() + " - " + domain + " - Einstellungen");
                        break;
                    case "Templates":
                        $("#page-title h2").html($("#page-title h2").html() + " - " + domain + " - Zonen Vorlagen");
                        break;
                    default:
                        if(domain != ""){
                            $("#page-title h2").html($("#page-title h2").html() + " - " + domain + " - Zonen");
                        }else{
                            $("#page-title h2").html($("#page-title h2").html() + " - Zonen");
                        }

                        break;
                }
                break;
            case "DomainLogs":
                $("#page-title h2").html($("#page-title h2").html() + " - Logs");
                break;
            default:
                $("#page-title h2").html("Domainrobot");
                break;
        }

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

