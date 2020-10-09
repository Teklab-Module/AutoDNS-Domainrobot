$(function() {
    function checkIp(val) {
        var ip = "^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])$";

        return val.match(ip) !== null;


    }

    $("#tldswitch").change(function () {
        if($(this).is(":checked")){
            $("#tld_chosen").hide();
            $("#selfinputtld").show();
        }else{
            $("#selfinputtld").hide();
            $("#tld_chosen").show();
        }
    });

    $("#domainname").focusout(function () {
        if($(this).val() === ""){
            $(this).css("border","3px solid #ffd0d0");
            return false;
        }else{
            $(this).css("border", "1px solid #c2cad1");
        }

        var tld = "false";
        if($("#tld_chosen").length){
            tld = $("select[name=tld]").val();
            tld = tld.split("#")[0];
            if(tld !== "false"){
                var dom = $("#domainname").val() + "." + tld;
            }
        }else{
            if( $("#tldself").val() !== ""){
                tld = $("#tldself").val()
                var dom = $("#domainname").val() + "." + tld;
            }
        }


        if(tld !== ""){
            if(tld !== "false")
                $("#customerproduct").val("Domainbestellung: "+ dom +"\nVorauszahlung: 12 Monate\nVertragslaufzeit: 12 Monate\nKündigungsfrist: 14 Tage");
        }

    });

    $("#tld_chosen").focusout(function () {
        var tld = $("select[name=tld]").val();
        if(tld.split("#")[0] === "false"){
            $(this).css("border","3px solid #ffd0d0");
            return false;
        }else{
            $(this).css("border", "unset");

        }

        if($("#domainname").val() !== ""){
            if($("#tld_chosen").length){
                var tld = $("select[name=tld]").val();
                var dom = $("#domainname").val() + "." + tld.split("#")[0];
            }else{
                var dom = $("#domainname").val() + "." + $("#tldself").val();
            }

            $("#customerproduct").val("Domainbestellung: "+ dom +"\nVorauszahlung: 12 Monate\nVertragslaufzeit: 12 Monate\nKündigungsfrist: 14 Tage");
        }
    });

    $("#tldself").focusout(function () {
        if($(this).val() === ""){
            $(this).css("border","3px solid #ffd0d0");
            return false;
        }else{
            $(this).css("border", "unset");
        }

        if($("#domainname").val() !== ""){
            var dom = $("#domainname").val() + "." + $("#tldself").val();
            $("#customerproduct").val("Domainbestellung: "+ dom +"\nVorauszahlung: 12 Monate\nVertragslaufzeit: 12 Monate\nKündigungsfrist: 14 Tage");
        }
    });

    $("#zoneip").focusout(function () {
        if($(this).val() === "" || checkIp($(this).val()) === false){
            $(this).css("border","3px solid #ffd0d0");
        }else{
            $(this).css("border", "1px solid #c2cad1");
        }

        if($("#domainname").val() !== ""){
            if($("#tld_chosen").length){
                var tld = $("select[name=tld]").val();
                var dom = $("#domainname").val() + "." + tld.split("#")[0];
            }else{
                var tld = $("#tldself").val();
                var dom = $("#domainname").val() + "." + $("#tldself").val();
            }

            if(tld !== "" || tld !== "false"){
                $("#customerproduct").val("Domainbestellung: "+ dom +"\nVorauszahlung: 12 Monate\nVertragslaufzeit: 12 Monate\nKündigungsfrist: 14 Tage");
            }
        }
    });

    $("#ownerc").focusout(function () {
        if($(this).val() === ""){
            $(this).css("border","3px solid #ffd0d0");
        }else{
            $(this).css("border", "1px solid #c2cad1");
        }
    });

    $("#adminc").focusout(function () {
        if($(this).val() === ""){
            $(this).css("border","3px solid #ffd0d0");
        }else{
            $(this).css("border", "1px solid #c2cad1");
        }
    });

    $("#techc").focusout(function () {
        if($(this).val() === ""){
            $(this).css("border","3px solid #ffd0d0");
        }else{
            $(this).css("border", "1px solid #c2cad1");
        }
    });

    $("#zonec").focusout(function () {
        if($(this).val() === ""){
            $(this).css("border","3px solid #ffd0d0");
        }else{
            $(this).css("border", "1px solid #c2cad1");
        }
    });



    $("#save").click(function (e) {
        var cancel = false;
        if($("#domainname").val() === ""){
            $("#domainname").css("border","3px solid #ffd0d0");
            cancel = true;
        }else{
            $("#domainname").css("border", "1px solid #c2cad1");
        }

        var tld = $("select[name=tld]").val();
        if(tld.split("#")[0] === "false"){
            $("#tld_chosen").css("border","3px solid #ffd0d0");
        }else{
            $("#tld_chosen").css("border", "unset");
            cancel = true;
        }

        if($("#zoneip").val() === ""){
            $("#zoneip").css("border","3px solid #ffd0d0");
        }else{
            $("#zoneip").css("border", "1px solid #c2cad1");
            cancel = true;
        }

        if($("#ownerc").val() === ""){
            $("#ownerc").css("border","3px solid #ffd0d0");
        }else{
            $("#ownerc").css("border", "1px solid #c2cad1");
            cancel = true;
        }

        if($("#adminc").val() === ""){
            $("#adminc").css("border","3px solid #ffd0d0");
        }else{
            $("#adminc").css("border", "1px solid #c2cad1");
            cancel = true;
        }

        if($("#techc").val() === ""){
            $("#techc").css("border","3px solid #ffd0d0");
        }else{
            $("#techc").css("border", "1px solid #c2cad1");
            cancel = true;
        }

        if($("#zonec").val() === ""){
            $("#zonec").css("border","3px solid #ffd0d0");
        }else{
            $("#zonec").css("border", "1px solid #c2cad1");
            cancel = true;
        }

        if(cancel === false){
            e.preventDefault();
            return false;
        }

    });

});