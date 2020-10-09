$(function() {


    if($("#savezonedata").length){
        if(countfield() == 0){
            addRecord();
        }else{
            addRecord();
        }
    }

    $("#addrecord").click(function (e) {

        e.preventDefault();
        addRecord();
    });

    $("div select#recordtype").each(function () {
        $(this).change(function () {
           var type = $("option:selected",this).val();
           var pref =$(this).parents().find("#recordpref");

           pref.prop( "disabled", true );
           if( type === "SRV" || type === "MX"){
               pref.prop( "disabled", false );
           }
       });

        $(this).change();
    });



    function addRecord(){
        var count = countfield();
        var defautlttl = $("#defaultttl").val();

        $("#addrecorddl").append(
            '<tr id="clearrow" role="row" class="odd">\n' +
            '    <td class="sorting_1 change">\n' +
            '        <div class="datatxt">&nbsp;</div>\n' +
            '    </td>\n' +
            '    <td>\n' +
            '        <div class="datatxt col-sm-12">\n' +
            '            <input type="text" name="zone['+count+'][add][name]" class="form-control" value="" placeholder="subdomain name">\n' +
            '            <input type="hidden" name="zone['+count+'][rem][name]" value="" >\n' +
            '       </div>\n' +
            '    </td>\n' +
            '    <td>\n' +
            '        <div class="datatxt col-sm-12">\n' +
            '            <input type="text" name="zone['+count+'][add][ttl]" class="form-control" value="'+defautlttl+'" placeholder="TTL Zeit">\n' +
            '            <input type="hidden" name="zone['+count+'][rem][ttl]" value="'+defautlttl+'" >\n' +
            '       </div>\n' +
            '    </td>\n' +
            '    <td>\n' +
            '    <div class="datatxt col-sm-12">\n' +
            '    <select name="zone['+count+'][add][type]" class="form-control">\n' +
            '    <option value="A">A</option>\n' +
            '    <option value="AAAA">AAAA</option>\n' +
            '    <option value="CAA">CAA</option>\n' +
            '    <option value="CNAME">CNAME</option>\n' +
            '    <option value="HINFO">HINFO</option>\n' +
            '    <option value="MX">MX</option>\n' +
            '    <option value="NAPTR">NAPTR</option>\n' +
            '    <option value="NS">NS</option>\n' +
            '    <option value="PTR">PTR</option>\n' +
            '    <option value="SRV">SRV</option>\n' +
            '    <option value="TXT">TXT</option>\n' +
            '    <option value="ALIAS">ALIAS</option>\n' +
            '    </select>\n' +
            '    <input type="hidden" name="zone['+count+'][rem][type]" value="" >\n' +
            '    </div>\n' +
            '    </td>\n' +
            '    <td>\n' +
            '        <div class="datatxt col-sm-12">\n' +
            '            <input type="text" id="recordpref" pattern="[0-9.]+" name="zone['+count+'][add][pref]" class="form-control" value="" placeholder="Preference (MX/SRV)" disabled>\n' +
            '            <input type="hidden" name="zone['+count+'][rem][pref]" value="" >\n' +
            '       </div>\n' +
            '    </td>\n' +
            '    <td>\n' +
            '        <div class="datatxt col-sm-12">\n' +
            '            <input type="text" name="zone['+count+'][add][value]" class="form-control" value="" placeholder="Wert / IP / Domain">\n' +
            '            <input type="hidden" name="zone['+count+'][rem][value]" value="" >\n' +
            '       </div>\n' +
            '    </td>\n' +
            '    </tr>'
        );
    }

    function countfield() {
        return $(".change").length ;
    }


    $("a#clear").each(function () {
        $(this).on("click", function(e) {
            e.preventDefault();
            var test = $(this).parents("#clearrow");
            var tt = test.find("td div");

            $(tt).each(function(index) {
                if($(this).find("input[type=text]").val() !== undefined){
                    if($(this).find("input[type=text]").val() != ""){
                        $(this).find("input[type=text]").val("");
                    }
                }

                if($(this).find("input[type=number]").val() !== undefined){
                    if($(this).find("input[type=number]").val() != ""){
                        $(this).find("input[type=number]").val("");
                    }
                }
            });

        });
    });

    $("input[type=text][pattern]").each(function () {
       $(this).on("input", function (val) {
           if (!this.checkValidity())
               this.value = this.value.slice(0, -1);
       });
    });

    

});


