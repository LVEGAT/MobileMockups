function listViewClick(e) {
    app.navigate("controller.html", "slide");
}

function viewInitSite(e) {
    e.view.element.find("#listSite").kendoMobileListView({
        dataSource: [
            { text: "Site 01" },
            { text: "Site 02" },
            { text: "Site 03" },
            { text: "Site 04" }
        ],
        filterable: false,
        style: "detaildisclose",
        template: "<div>#:text#</div>"
    });
}

function showMap() {
  app.navigate("#map");
}