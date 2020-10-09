$(function () {


    function checkIp(val) {
        var ip = "^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])$";

        return val.match(ip) !== null;


    }

    $("div.dataimgcenter a").each(function () {
        $(this).click(function (e) {
            var ipvalue = $(this).parents().find("#checkip");

            if (checkIp(ipvalue)) {
                return true;
            } else {
                e.preventDefault();
                alert("Bitte geben Sie eine Gültige IP Adresse ein");
                return false;
            }

        });
    });

    var mainip = "";
    $("form[name=mainipchange] input").focusin(function (e) {
        mainip = $(this).val();

    });

    $("form[name=mainipchange] input").focusout(function (e) {
        if ($(this).val() === mainip) {
            e.preventDefault();
            return false;
        }

        if (checkIp($(this).val())) {
            $(this).parent("form").submit();
            return true;
        } else {
            e.preventDefault();
            alert("Bitte geben Sie eine Gültige IP Adresse ein");
            return false;
        }
    });

});