$(function() {
    if ($("#leftmenu").length) {
        let mainMenu = null;
        let delmenu = null;
        $("li[id^='leftmenu_'] span[id^='menusub_'] div a").each(function (index) {
            if ($(this).attr("href") == "admin.php?op=adminDatabase") {
                mainMenu = $(this).parent().parent();
            }
            if ($(this).attr("href") == "admin.php?op=List&of=Domainrobot") {
                delmenu = $(this);
            }
        });
        delmenu.remove();
        mainMenu.parent().after(
            '<li id="leftmenu_domainrobot"> \
                <div class="leftcaticon" style="float:right;"> \
                    <a href="admin.php?op=List&of=Domainrobot">\
                        <i class="tekbase icon-right4"></i>\
                    </a>\
                </div> \
                <div class="leftcat"> \
                    <a href="javascript:leftshow(\'leftmenusub_domainrobot\')" title="Minimieren/Wiederherstellen" style="color: goldenrod;">\
                        <i class="tekbase icon-domain"></i>&nbsp;Domain Module\
                    </a> \
                </div> \
                <span id="leftmenusub_domainrobot" class="close"> \
                    <div style="padding-bottom:5px;padding-left:13px;"> \
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainList">Kunden Domains</a><br> \
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainList&bc=DomainCancelations">gekündigte Domains</a><br> \
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainList&bc=DomainToAssign">zuzuweisende Domains</a><br><br> \
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainContacts">Domain Kontakte</a><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainContacts&bc=Add">Kontakte Hinzufügen</a><br><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainAdd">Domain Registrieren</a><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainAdd&bc=DoaminTransfer">Domain Transfer</a><br><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=Reseller">Reseller</a><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=Reseller&bc=DomainList">Reseller Domains</a><br><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainSettings">Einstellungen</a><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainSettings&bc=ApiSettings">API Einstellungen</a><br><br>\
                        <a class="leftmenu" href="admin.php?op=List&of=Domainrobot&ac=DomainLogs">Logs</a><br>\
                    </div> \
                </span> \
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