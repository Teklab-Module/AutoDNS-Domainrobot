$(function() {
    function checkIp(val) {
        var ip = "^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\." +
            "([01]?\\d\\d?|2[0-4]\\d|25[0-5])$";

        return val.match(ip) !== null;


    }

    $("#newzoneip").focusout(function (e) {
        if(checkIp($(this).val())){
            $("#dataprivacy").change();
            $("#termsaccept").change();
            $("#revocation").change();
            $("#newzoneip").css("border","1px solid #c2cad1");
            return true;
        }else{
            $("#dataprivacy").change();
            $("#termsaccept").change();
            $("#revocation").change();
            $("#newzoneip").css("border","3px solid #ffd0d0");
            return false;
        }


    });

    $("#domainname").focusout(function (e) {
        var re = "[a-z0-9][a-z0-9-]{0,61}[a-z0-9]";

        var dom = $("#domainname").val();
        var tld = $("select[name=tld]").val();
        var domain = dom + "." + tld;
        if($("#domainname").val() === ""){
            $("#domainname").css("border","3px solid #ffd0d0");
            return false;
        }

        if (domain.match(re)) {
            $("#dataprivacy").change();
            $("#termsaccept").change();
            $("#revocation").change();
            $("#domainname").css("border","1px solid #c2cad1");
            return true;

        }else{
            $("#dataprivacy").change();
            $("#termsaccept").change();
            $("#revocation").change();
            $("#domainname").css("border","3px solid #ffd0d0");
            return false;
        }
    });

    function checkip(){
        if($("#newzoneip").val() === ""){
            $("#newzoneip").css("border","3px solid #ffd0d0");
            return false;
        }

        if(checkIp($("#newzoneip").val())){
            $("#newzoneip").css("border","1px solid #c2cad1");
            return true;
        }else{
            $("#newzoneip").css("border","3px solid #ffd0d0");
            return false;
        }

        $("#dataprivacy").change();
        $("#termsaccept").change();
    }

    function checkdomain(){
        var re = "(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]";
        var dom = $("#domainname").val();
        var tld = $("select[name=tld]").val();

        var domain = dom + "." + tld;
        if (domain.match(re)) {
            $("#domainname").css("border","1px solid #c2cad1");
            return true;
        }else{
            $("#domainname").css("border","3px solid #ffd0d0");
            return false;
        }

        $("#dataprivacy").change();
        $("#termsaccept").change();
    }

    if($("#authcode").length){
        $("#authcode").focusout(function () {
            if($("#authcode").val() === ""){
                $("#authcode").css("border","3px solid #ffd0d0");
                return false;
            }else{
                $("#authcode").css("border","1px solid #c2cad1");
                return true;
            }
        });

    }


    function checkauthcode(){
        if($("#authcode").length){
            if($("#authcode").val() === ""){
                $("#authcode").css("border","3px solid #ffd0d0");
                return false;
            }else{
                $("#authcode").css("border","1px solid #c2cad1");
                return true;
            }
        }else{
            return true;
        }
    }

    $("#dataprivacy").change(function () {
        if($(this).is(":checked")){
            if($("#termsaccept").is(":checked") &&
                $("#revocation").is(":checked") &&
                $("#newzoneip").val() !== "" && $("#domainname").val() !== "" &&
                checkip() && checkdomain() && checkauthcode() && $("select[name=tld]").val().split("#")[0] !== "false"){
                $("#confirm").attr("disabled", false);
            }else{
                $("#confirm").attr("disabled", true);
            }
        }else{
            $("#confirm").attr("disabled", true);
        }
    })

    $("#termsaccept").change(function () {
        if($(this).is(":checked")){
            if($("#dataprivacy").is(":checked") &&
                $("#revocation").is(":checked") &&
                $("#newzoneip").val() !== "" && $("#domainname").val() !== "" &&
                checkip() && checkdomain() && checkauthcode() && $("select[name=tld]").val().split("#")[0] !== "false"){
                $("#confirm").attr("disabled", false);
            }else{
                $("#confirm").attr("disabled", true);
            }
        }else{
            $("#confirm").attr("disabled", true);
        }
    })

    $("#revocation").change(function () {
        if($(this).is(":checked")){
            if($("#termsaccept").is(":checked") &&
                $("#dataprivacy").is(":checked") &&
                $("#newzoneip").val() !== "" && $("#domainname").val() !== "" &&
                checkip() && checkdomain() && checkauthcode() && $("select[name=tld]").val().split("#")[0] !== "false"){
                $("#confirm").attr("disabled", false);
            }else{
                $("#confirm").attr("disabled", true);
            }
        }else{
            $("#confirm").attr("disabled", true);
        }
    })

    if( $("select[name=tld]").length){
        var tlddata = $("select[name=tld]").val().split("#");
        var price = tlddata[1];
        var specialoffer = tlddata[2];

        if(specialoffer === "0"){
            $("#divpricetotal").show();
            $("#divspecialoffer").hide();
            $("#divprice").hide();
            $("#lblpricetotal").html(price + " EUR");
        }else{
            $("#divspecialoffer").show();
            $("#divprice").show();
            $("#divpricetotal").show();

            $("#lblspecialoffer").html(specialoffer + " %");
            $("#lblprice").html(price + " EUR");

            var pricetotal = price - (price/100*specialoffer);


            $("#lblpricetotal").html(pricetotal.toFixed(2) + "  EUR");
        }

        $("select[name=tld]").change(function () {
            var tlddata = $(this).val().split("#");
            var price = tlddata[1];
            var specialoffer = tlddata[2];
            if(specialoffer === "0"){
                $("#divpricetotal").show();
                $("#divspecialoffer").hide();
                $("#divprice").hide();
                $("#lblpricetotal").html(price + " EUR");
            }else{
                $("#divspecialoffer").show();
                $("#divprice").show();
                $("#divpricetotal").show();

                $("#lblspecialoffer").html(specialoffer + " %");
                $("#lblprice").html(price + " EUR");

                var pricetotal = price - (price/100*specialoffer);
                $("#lblpricetotal").html(pricetotal.toFixed(2) + "  EUR");
            }
        });
    }

    $("#lbldataprivacy").click(function () {
        if($("#dataprivacy").is(":checked")){
            $("#dataprivacy").prop('checked', false);
        }else{
            $("#dataprivacy").prop('checked', true);
        }
        $("#dataprivacy").change();
    });

    $("#lbltermsaccept").click(function () {
        if($("#termsaccept").is(":checked")){
            $("#termsaccept").prop('checked', false);
        }else{
            $("#termsaccept").prop('checked', true);
        }
        $("#termsaccept").change();
    });

    $("#lblrevocation").click(function () {
        if($("#revocation").is(":checked")){
            $("#revocation").prop('checked', false);
        }else{
            $("#revocation").prop('checked', true);
        }
        $("#revocation").change();

    });

});