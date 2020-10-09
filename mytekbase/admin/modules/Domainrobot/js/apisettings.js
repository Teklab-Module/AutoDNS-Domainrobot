$(function () {




    if($("#apiurl").val() === ""){
        if($("#live").is(":checked")){
            $("#apiurl").val("https://api.autodns.com/v1/");
            $("#apins1").val("a.ns14.net");
            $("#apins2").val("b.ns14.net");
            $("#apins3").val("c.ns14.net");
            $("#apins4").val("d.ns14.net");

        }else{
            $("#apiurl").val("https://api.demo.autodns.com/v1/");
            $("#apins1").val("a.demo.autodns.com");
            $("#apins2").val("b.demo.autodns.com");

        }
    }

    $("#live").change(function () {
        if($("#live").is(":checked")){
            if($("#apiurl").val() === "" || $("#apiurl").val() === "https://api.demo.autodns.com/v1/"){
                $("#apiurl").val("https://api.autodns.com/v1/");
            }
            if($("#apins1").val() === "" || $("#apins1").val() === "a.demo.autodns.com"){
                $("#apins1").val("a.ns14.net");
            }
            if($("#apins2").val() === "" || $("#apins2").val() === "b.demo.autodns.com"){
                $("#apins2").val("b.ns14.net");
            }
            if($("#apins3").val() === ""){
                $("#apins3").val("c.ns14.net");
            }
            if($("#apins4").val() === ""){
                $("#apins4").val("d.ns14.net");
            }
        }
    });

    $("#demo").change(function () {
        if($("#demo").is(":checked")){
            if($("#apiurl").val() === "" || $("#apiurl").val() === "https://api.autodns.com/v1/"){
                $("#apiurl").val("https://api.demo.autodns.com/v1/");
            }
            if($("#apins1").val() === "" || $("#apins1").val() === "a.ns14.net"){
                $("#apins1").val("a.demo.autodns.com");
            }
            if($("#apins2").val() === "" || $("#apins2").val() === "b.ns14.net"){
                $("#apins2").val("b.demo.autodns.com");
            }
            $("#apins3").val("");
            $("#apins4").val("");

        }
    });

    $("#saveapi").click(function(e){
        if($("#apiuser").val() === ""){
            e.preventDefault();
            $("#apiuser").css("border","3px solid #ffd0d0");
        }else{
            $("#apiuser").css("border","1px solid #c2cad1");
        }

        if($("#apipass").val() === ""){
            e.preventDefault();
            $("#apipass").css("border","3px solid #ffd0d0");
        }else{
            $("#apipass").css("border","1px solid #c2cad1");
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

        if($("#priceuser").val() !== ""){
            e.preventDefault();
            $("#pricepass").css("border","3px solid #ffd0d0");
        }else{
            $("#pricepass").css("border","1px solid #c2cad1");
        }


    });
});