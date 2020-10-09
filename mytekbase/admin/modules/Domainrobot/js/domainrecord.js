$(function() {


    if($("#savezonedata").length){
        addRecord();
    }

    $("#addrecord").click(function (e) {

        e.preventDefault();
        addRecord();
    });

    $("dd select#recordtype").each(function () {
       $(this).change(function () {
           var type = $("option:selected",this).val();
           var pref =$(this).parents().find("#recordpref");

           pref.prop( "disabled", true );
           if( type == "SRV" || type == "MX"){
               pref.prop( "disabled", false );
           }
       });
    });

    function addRecord(){
        var count = countfield();
        var defautlttl = $("#defaultttl").val();

        $("#addrecorddl").append(
            '<li class="datarowa">\n' +
            '    <dl id="addrecorddl">\n' +
            '    <dd class="dataten change" >\n' +
            '    <div class="datatxt">&nbsp;</div>\n' +
            '</dd>\n' +
            '<dd class="datafiften lineheight34" >\n' +
            '    <input type="text" name="zone['+count+'][add][name]" class="inputfield width80percent" value="" placeholder="subdomain name">\n' +
            '    <input type="hidden" name="zone['+count+'][rem][name]" value="" >\n' +
            '    </dd>\n' +
            '    <dd class="dataten lineheight34" >\n' +
            '    <input type="text" name="zone['+count+'][add][ttl]" class="inputfield width80percent" value="'+defautlttl+'" placeholder="TTL Zeit">\n' +
            '    <input type="hidden" name="zone['+count+'][rem][ttl]" value="'+defautlttl+'" >\n' +
            '    </dd>\n' +
            '    <dd class="dataten lineheight34" >\n' +
            '    <select name="zone['+count+'][add][type]" class="selectfield">\n' +
            '    <option value="A" selected>A</option>\n' +
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
            '    <input type="hidden" name="zone['+count+'][rem][type]" value="A" >\n' +
            '    </dd>\n' +
            '    <dd class="datatwentyfive lineheight34">\n' +
            '    <input type="text" pattern="[0-9.]+" name="zone['+count+'][add][pref]" class="inputfield width95percent" value="" placeholder="Preference (MX/SRV)">\n' +
            '    <input type="hidden" name="zone['+count+'][rem][pref]" value="" >\n' +
            '    </dd>\n' +
            '    <dd class="datathirty lineheight34">\n' +
            '    <input type="text" name="zone['+count+'][add][value]" class="inputfield width95percent" value="" placeholder="Wert / IP / Domain">\n' +
            '    <input type="hidden" name="zone['+count+'][rem][value]" value="" >\n' +
            '    </dd>\n' +
            '    </dl>\n' +
            '    </li>'
        );
    }

    function countfield() {
        return $(".change").length ;
    }


    $("a#clear").each(function () {
        $(this).on("click", function(e) {
            e.preventDefault();
            var test = $(this).parents("#clearrow");
            var tt = test.find("dl dd");

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

    $("#srvcreate").click(function () {
        var count = countfield();
        if($("input[name=zone["+count+"][add][name]]").val() !== ""){
            addRecord();
            count = countfield();
        }

        $("input[name=zone["+count+"][add][name]]").val($("#srvarecordname").val());

    });

    /*$("#addsrv2").click(function () {
        $(".popup").css("display", "block");
    });*/
});


