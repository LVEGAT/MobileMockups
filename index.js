var app = new kendo.mobile.Application(document.body, { skin: "flat" });
var that = this;

function onLoginClick(e) {
    app.navigate("splash.html", "slide");
}

function onShow(e) {
    app.pane.loader.show();
    setTimeout(function () {
        app.pane.loader.hide(); //hide loading animation
        app.navigate("home.html", "slide");
    }, 2000);
}

function onNavigateExitClick(e) {
    app.navigate("index.html", "slide");
}

$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

/*function viewInitSite(e) {
    e.view.element.find("#listSite").kendoMobileListView({
        dataSource: ["Site 01", "Site 02", "Site 03", "Site 04"],
        filterable: true,
        style: "detaildisclose"
    });
}*/