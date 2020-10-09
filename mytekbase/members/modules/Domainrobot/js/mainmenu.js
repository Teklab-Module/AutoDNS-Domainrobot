$(function() {
    if ($("#sidebar-menu").length) {
        let mainMenu = null;
        let delmenu = null;
        $("ul li[id^='leftmenu_'] div[id^='menusub_'] ul li a").each(function (index) {
            if ($(this).attr("href") == "members.php?op=Main") {
                mainMenu = $(this).parent().parent();
            }
            if ($(this).attr("href") == "members.php?op=List&of=Domainrobot") {
                delmenu = $(this);
            }
        });
        delmenu.remove();
        mainMenu.parent().after(
            '\
                <li id="leftmenu_domainrobot"> \
                    <a href="javascript:menushow(\'menusub_domain\');" name="menusub_domain" class="leftcat ui-sortable-handle pad10l">\
                        <i class="tekbase icon-resize_four_directions"></i>\
                            <span>Domain Module</span>\
                    </a>\
                    <div id="menusub_domain" class="submenuopen"> \
                        <ul>\
                        <li><a href="members.php?op=List&of=Domainrobot"><i class="tekbase icon-domain"></i>meine Domains</a></li>\
                        <!--<li><a href="members.php?op=List&of=Domainrobot"><i class="tekbase icon-domain"></i>Domain Bestellen</a></li>-->\
                        <!--<li><a href="members.php?op=List&of=Domainrobot"><i class="tekbase icon-domain"></i>Logs</a></li>-->\
                        </ul>\
                    </div>\
                 </li>'
        );
    }


    var params = new window.URLSearchParams(window.location.search);

    if (params.get('of') == "Domainrobot") {
        if ($("#leftmenusub_domainrobot").hasClass("close")) {
            $("#leftmenusub_domainrobot").removeClass("close");
            $("#leftmenusub_domainrobot").addClass("open");
        }
    }
});