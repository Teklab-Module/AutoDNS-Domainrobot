$(function () {
    let dom = $("#apiid").val();

    $.post(
        "mytekbase/admin/modules/Domainrobot/domain/datatables.php",
        {
            ac: "getDomainList",
        }
    ).done(function (data, status){
        //const obj = JSON.parse(data);
        //alert(obj.status);
        },"json");
});