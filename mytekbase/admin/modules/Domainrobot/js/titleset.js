
$(function() {

    $.fn.removeClassStartingWith = function (filter) {
        $(this).removeClass(function (index, className) {
            return (className.match(new RegExp("\\S*" + filter + "\\S*", 'g')) || []).join(' ')
        });
        return this;
    };

    if($("div.title").length){
        switch (GetURLParameter('ac')) {
            case "DomainList":
                $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-domain");
                switch (GetURLParameter('bc')){
                    case "DomainCancelations":
                        $("div.title").html($("div.title").html() + " - Kündigungen");
                        break;
                    case "DomainToRestore":
                        $("div.title").html($("div.title").html() + " - Wiederherstellen");
                        break;
                    case "RepairZone":
                        $("div.title").html($("div.title").html() + " - Zonen Reparieren");
                        break;
                    case "InactiveDomain":
                        $("div.title").html($("div.title").html() + " - Zonen Löschen");
                        break;
                    default:
                        $("div.title").html($("div.title").html() + " - Domainliste");
                        break;
                }
                break;
            case "DomainApiSettings":
                switch (GetURLParameter('bc')){
                    case "Add":
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-settings");
                        $("div.title").html($("div.title").html() + " - Api Hinzufügen");
                        break;
                    case "Edit":
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-settings");
                        $("div.title").html($("div.title").html() + " - Api Editieren");
                        break;
                    default:
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-settings");
                        $("div.title").html($("div.title").html() + " - Api Einstellung");
                        break;
                }
                break;
            case "DomainSettings":
                $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-api_settings");
                $("div.title").html($("div.title").html() + " - Allgemeine Einstellung");
                break;
            case "DomainEdit":
                $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-domain");
                if($("#origin").length){
                    var domain = $("#origin").html();
                }else{
                    var domain = "";
                }
                switch (GetURLParameter('bc')){
                    case "Settings":

                        $("div.title").html($("div.title").html() + " - " + domain + " - Einstellungen");
                        break;
                    case "Templates":
                        $("div.title").html($("div.title").html() + " - " + domain + " - Zonen Vorlagen");
                        break;
                    default:
                        if(domain != ""){
                            $("div.title").html($("div.title").html() + " - " + domain + " - Zonen");
                        }else{
                            $("div.title").html($("div.title").html() + " - Zonen");
                        }

                        break;
                }
                break;
            case "DomainContacts":
                switch (GetURLParameter('bc')){
                    case "Add":
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-add_user");
                        $("div.title").html($("div.title").html() + " - Kontakt Hinzufügen");
                        break;
                    case "Edit":
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-edit_user");
                        $("div.title").html($("div.title").html() + " - Kontakt Editieren");
                        break;
                    default:
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-user_menu");
                        $("div.title").html($("div.title").html() + " - Kontakte");
                        break;
                }
                break;
            case "DomainAdd":
                switch (GetURLParameter('bc')){
                    case "DoaminTransfer":
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-add_shopping_cart");
                        $("div.title").html($("div.title").html() + " - Domain transferieren");
                        break;
                    default:
                        $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-add_shopping_cart");
                        $("div.title").html($("div.title").html() + " - Domain Registrieren");
                        break;
                }

                break;
            case "DomainLogs":
                $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-document");
                $("div.title").html($("div.title").html() + " - Logs");
                break;
            case "ResellerDomainList":
                $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-conference_background_selected");
                $("div.title").html($("div.title").html() + " - Subuser Domainslite");
                break;
            default:
                $("div.titleimg i").removeClassStartingWith("icon-").addClass("icon-domain");
                $("div.title").html("Domainrobot");
                break;
        }

    }





    function GetURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam)
            {
                return sParameterName[1];
            }
        }
        return "NOTING";
    }

    if($("div #msgtoremove").length){
        var timer = setInterval(msgtoremove, 1000);
        var f = 5;

        function msgtoremove() {
            if(f === 0){
                $("div #msgtoremove").fadeOut(500, function () {
                    $(this).remove();
                });
                clearInterval(timer);
            }
            f--;
        }

    }



});

