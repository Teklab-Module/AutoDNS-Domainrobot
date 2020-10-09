$(function () {
    let type = null;
    $(".apitype").change(function () {
        type = $( "option:selected",this ).val();
        if($("#live").is(":checked")){
            $("#live").change();
        }

        if($("#demo").is(":checked")){
            $("#demo").change();
        }

        if(type === "smartnic"){
            $("#pu").hide();
            $("#pp").hide();
            $("#smart").attr("style", "height: 200px;")
        }else{
            $("#pu").show();
            $("#pp").show();
        }
    });

    if($("#apiurl").val() === ""){
        if($("#live").is(":checked")){
            type = $( ".apitype option:selected" ).val();
            if(type === "autodns"){
                $("#apiurl").val("https://api.autodns.com/v1/");
                $("#apins1").val("a.ns14.net");
                $("#apins2").val("b.ns14.net");
                $("#apins3").val("c.ns14.net");
                $("#apins4").val("d.ns14.net");
            }else{
                $("#apiurl").val("https://soap.domain-bestellsystem.de/soap.wsdl");
                $("#apins1").val("dns1.dns.de");
                $("#apins2").val("dns2.dns.de");
                $("#apins3").val("dns3.dns.de");
                $("#apins4").val("dns4.dns.de");
            }
        }else{
            if(type === "autodns"){
                $("#apiurl").val("https://api.demo.autodns.com/v1/");
                $("#apins1").val("a.demo.autodns.com");
                $("#apins2").val("b.demo.autodns.com");
            }else{
                $("#apiurl").val("https://soap.domain-bestellsystem.de/soap.wsdl");
                $("#apins1").val("test-dns.dns1.de");
                $("#apins2").val("test-dns.dns2.de");
            }

        }
    }

    $("#live").change(function () {
        if($("#live").is(":checked")){
            if(type === "autodns"){
                if($("#apiurl").val() === "" || $("#apiurl").val() !== "https://api.autodns.com/v1/"){
                    $("#apiurl").val("https://api.autodns.com/v1/");
                }
                if($("#apins1").val() === "" || $("#apins1").val() === "a.demo.autodns.com" ||  $("#apins1").val() === "test-dns.dns1.de" || $("#apins1").val() === "dns1.dns.de"){
                    $("#apins1").val("a.ns14.net");
                }
                if($("#apins2").val() === "" || $("#apins2").val() === "b.demo.autodns.com"||  $("#apins2").val() === "test-dns.dns2.de" || $("#apins2").val() === "dns2.dns.de"){
                    $("#apins2").val("b.ns14.net");
                }
                if($("#apins3").val() === "" || $("#apins3").val() === "dns3.dns.de"){
                    $("#apins3").val("c.ns14.net");
                }
                if($("#apins4").val() === "" || $("#apins4").val() === "dns4.dns.de"){
                    $("#apins4").val("d.ns14.net");
                }
            }else{
                if($("#apiurl").val() === "" || $("#apiurl").val() !== "https://soap.domain-bestellsystem.de/soap.wsdl"){
                    $("#apiurl").val("https://soap.domain-bestellsystem.de/soap.wsdl");
                }
                if($("#apins1").val() === "" || $("#apins1").val() === "test-dns.dns1.de" || $("#apins1").val() === "a.demo.autodns.com" || $("#apins1").val() === "a.ns14.net"){
                    $("#apins1").val("dns1.dns.de");
                }
                if($("#apins2").val() === "" || $("#apins2").val() === "test-dns.dns2.de" || $("#apins2").val() === "b.demo.autodns.com" || $("#apins2").val() === "b.ns14.net"){
                    $("#apins2").val("dns2.dns.de");
                }
                if($("#apins3").val() === "" || $("#apins3").val() === "c.ns14.net"){
                    $("#apins3").val("dns3.dns.de");
                }
                if($("#apins4").val() === "" || $("#apins4").val() === "d.ns14.net"){
                    $("#apins4").val("dns4.dns.de");
                }
            }

        }
    });

    $("#demo").change(function () {
        if($("#demo").is(":checked")){
            if(type === "autodns"){
                if($("#apiurl").val() === "" || $("#apiurl").val() !== "https://api.demo.autodns.com/v1/"){
                    $("#apiurl").val("https://api.demo.autodns.com/v1/");
                }
                if($("#apins1").val() === "" || $("#apins1").val() === "a.ns14.net" || $("#apins1").val() === "dns1.dns.de" || $("#apins1").val() === "test-dns.dns1.de" ){
                    $("#apins1").val("a.demo.autodns.com");
                }
                if($("#apins2").val() === "" || $("#apins2").val() === "b.ns14.net" || $("#apins2").val() === "dns2.dns.de" || $("#apins2").val() === "test-dns.dns2.de" ){
                    $("#apins2").val("b.demo.autodns.com");
                }
                $("#apins3").val("");
                $("#apins4").val("");
            }else{
                if($("#apiurl").val() === "" || $("#apiurl").val() !== "https://soap.domain-bestellsystem.de/soap.wsdl"){
                    $("#apiurl").val("https://soap.domain-bestellsystem.de/soap.wsdl");
                }
                if($("#apins1").val() === "" || $("#apins1").val() === "dns1.dns.de" || $("#apins1").val() === "a.ns14.net"  || $("#apins1").val() === "a.demo.autodns.com" ){
                    $("#apins1").val("test-dns.dns1.de");
                }
                if($("#apins2").val() === "" || $("#apins2").val() === "dns2.dns.de" || $("#apins2").val() === "b.ns14.net"  || $("#apins2").val() === "b.demo.autodns.com" ){
                    $("#apins2").val("test-dns.dns2.de");
                }
                $("#apins3").val("");
                $("#apins4").val("");
            }


        }
    });

    $("#saveapi").click(function(e){
        if($("#apiuser").val() === ""){
            e.preventDefault();
            $("#apiuser").css("border","3px solid #ffd0d0");
        }else{
            $("#apiuser").css("border","1px solid #c2cad1");
        }

        if(GetURLParameter('cc') !== "Edit"){
            if($("#apipass").val() === ""){
                e.preventDefault();
                $("#apipass").css("border","3px solid #ffd0d0");
            }else{
                $("#apipass").css("border","1px solid #c2cad1");
            }
        }

        if($("#apins1").val() === ""){
            e.preventDefault();
            $("#apins1").css("border","3px solid #ffd0d0");
        }else{
            $("#apins1").css("border","1px solid #c2cad1");
        }

        if($("#apins2").val() === ""){
            e.preventDefault();
            $("#apins2").css("border","3px solid #ffd0d0");
        }else{
            $("#apins2").css("border","1px solid #c2cad1");
        }

        if(type === "autodns"){
            if($("#priceuser").val() !== "" && $("#pricepass").val() === ""){
                e.preventDefault();
                $("#pricepass").css("border","3px solid #ffd0d0");
            }else{
                $("#pricepass").css("border","1px solid #c2cad1");
            }
        }
    });


    if($("#specialoffer").length){

        if($("#price").val() !== "" && $("#specialoffer").val() !== ""){
            var price = parseFloat($("#price").val());
            var specialoffer = $("#specialoffer").val();
            var specialofferprice = roundN((price- ((price/100*specialoffer))), 2);

            $("#specialofferprice").val(specialofferprice);
        }else{
            $("#specialofferprice").val("0.00");
            $("#specialoffer").val("0");
        }

        $("#price").focusout(function () {
            if($(this).val() === ""){
                return false;
            }

            var indexofpoint = $(this).val().indexOf(".");
            if(indexofpoint === -1){
                $(this).val($(this).val() + ".00");
            }else{
                if($(this).val().substring(indexofpoint +1, $(this).val().length).length === 1){
                    $(this).val($(this).val() + "0");
                }
            }
        });

        $("#price").keydown(function (e) {
            //alert(e.keyCode);
            if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
                e.preventDefault();         // Prevent character input
            } else {
                var n = e.keyCode;
                if (!((n === 8)              // backspace
                    || (n === 46)                // delete
                    || (n >= 35 && n <= 40)     // arrow keys/home/end
                    || (n >= 48 && n <= 57)     // numbers on keyboard
                    || (n >= 96 && n <= 105)
                    || (n === 190)
                    || (n === 108)
                    || (n === 188))
                ){
                    e.preventDefault();     // Prevent character input
                }


            }


        }).keyup(function () {
            $(this).val($(this).val().replace(',', '.'));
            if($(this).val().split('.').length === 2 || $(this).val().split('.').length > 2){
                if($(this).val().substring($(this).val().lastIndexOf('.') + 1, $(this).val().length).length > 2){
                    $(this).val($(this).val().substring(0, $(this).val().length - 1));
                }
            }
            setPrice();
        });

        $("#setup").focusout(function () {
            if($(this).val() === ""){
                $(this).val("0.00");
            }

            var indexofpoint = $(this).val().indexOf(".");

            if(indexofpoint === -1){
                $(this).val($(this).val() + ".00");
            }else{
                if($(this).val().substring(indexofpoint +1, $(this).val().length).length === 1){
                    $(this).val($(this).val() + "0");
                }
            }
        });

        $("#setup").keydown(function (e) {
            //alert(e.keyCode);
            if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
                e.preventDefault();         // Prevent character input
            } else {
                var n = e.keyCode;
                if (!((n === 8)              // backspace
                    || (n === 46)                // delete
                    || (n >= 35 && n <= 40)     // arrow keys/home/end
                    || (n >= 48 && n <= 57)     // numbers on keyboard
                    || (n >= 96 && n <= 105)
                    || (n === 190)
                    || (n === 108)
                    || (n === 188))
                ){
                    e.preventDefault();     // Prevent character input
                }


            }


        }).keyup(function () {
            $(this).val($(this).val().replace(',', '.'));
            if($(this).val().split('.').length === 2 || $(this).val().split('.').length > 2){
                if($(this).val().substring($(this).val().lastIndexOf('.') + 1, $(this).val().length).length > 2){
                    $(this).val($(this).val().substring(0, $(this).val().length - 1));
                }
            }
        });

        $("#specialoffer").keydown(function (e) {
            //alert(e.keyCode);
            if (e.shiftKey || e.ctrlKey || e.altKey) { // if shift, ctrl or alt keys held down
                e.preventDefault();         // Prevent character input
            } else {
                var n = e.keyCode;
                if (!((n === 8)              // backspace
                    || (n === 46)                // delete
                    || (n >= 35 && n <= 40)     // arrow keys/home/end
                    || (n >= 48 && n <= 57)     // numbers on keyboard
                    || (n >= 96 && n <= 105)
                    || (n === 190)
                    || (n === 108)
                    || (n === 188))
                ){

                    e.preventDefault();     // Prevent character input
                }

            }


        }).keyup(function () {
            $(this).val($(this).val().replace(',', '.'));
            if($(this).val().split('.').length === 2 || $(this).val().split('.').length > 2){
                if($(this).val().substring($(this).val().lastIndexOf('.') + 1, $(this).val().length).length > 2){
                    $(this).val($(this).val().substring(0, $(this).val().length - 1));
                }
            }
            if($("#price").val() !== ""){
                if($("#specialoffer").val() > 100){
                    $("#specialoffer").val("100");
                }
            }

            setPrice();
        });



    }

    function setPrice(){
        var price = $("#price").val();
        var specialoffer = $("#specialoffer").val();
        var specialofferprice = roundN((price- ((price/100*specialoffer))), 2);

        if(specialoffer > 100){
            specialoffer = "0.00";
        }

        if(specialoffer === "" || specialoffer === 0){
            specialofferprice = $("#price").val();
        }
        $("#specialofferprice").val(specialofferprice);
        parseFloat($("#price").val());
    }

    function roundN(num,n){
        return parseFloat(Math.round(num * Math.pow(10, n)) /Math.pow(10,n)).toFixed(n);
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
});