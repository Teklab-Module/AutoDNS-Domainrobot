$(function() {

    $("dd[name=customerlbl]").each(function (index) {
        $(this).click(function(e){

            e.preventDefault();
            //hide all span
            var thiss = $(this).parent().find('#customerseldd');

            $(this).not(thiss).hide();

            //here is what I want to do

            thiss.toggle();
            thiss.children().focus();


        });
    });

    $("dd[name=customerseldd]").each(function (index) {
        $(this).focusout(function(e){

            e.preventDefault();
            //hide all span
            var thiss = $(this).parent().find('#customerlbl');
            $(this).not(thiss).hide();

            //here is what I want to do
            thiss.toggle();

        });

        $(this).change(function (e) {
            e.preventDefault();
            var domain = $(this).parent().find(".datatxt").html();
            $("#customerid").val($("option:selected",this).val());
            $("#customerdomain").val(domain.replace(/<[^>]+>/g, ''));
            var domainid = $("option:selected",this).val();
            $(this).parent().find("#customerlbl .datatxt").html($("option:selected",this).text());
            if(domainid != "0"){
                $("#customerform").submit();
            }

        });
    });




});