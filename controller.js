var wnd, gridConfig,
    detailsTemplate;
var that = this;

$(document).ready(function () {
    gridConfig = {
        columns: [

            { field: "name", title: "Name", width: 100 },
            { field: "status", title: "Status", width: 75 },
            { command: { text: "...", width: 75, name: "menu", template: "<a data-role='button' data-rel='actionsheet' href='\\#actionsheet'>Run</a>" } },
            { command: { text: "...", width: 75, name: "menu", template: " <a href='\\#detailCtrl' data-icon='cart'>Detail</a>" } }
        ],
        dataSource: [
            { name: "Controller 1", status: "Idle" },
            { name: "Controller 2", status: "" },
            { name: "Controller 3", status: "Idle" },
            { name: "Controller 4", status: "Day off 2" },
            { name: "Controller 5", status: "" }
        ],
        filterable: true,
        columnMenu: true,
        mobile: "phone",
        height: "auto"

    };

    wnd = $("#details")
        .kendoWindow({
            title: "Controllers Details",
            modal: true,
            visible: false,
            resizable: false,
            width: 300
        }).data("kendoWindow");
    var template = $("#template");
    if (template) {
        detailsTemplate = kendo.template(template.html());
    }

});

function viewInitCtl(e) {
    $("#gridCtrl").kendoGrid(gridConfig);
}

function showDetailsCtrl(e) {
    app.navigate("program.html");
}

function programA(e) {
    app.navigate("program.html", "slide", "A");
}
function programB(e) {
    app.navigate("program.html", "slide", "B");
}
function programC(e) {
    app.navigate("program.html", "slide", "C");
}
function programD(e) {
    app.navigate("program.html", "slide", "D");
}
function programE(e) {
    app.navigate("program.html", "slide", "E");
}
function programF(e) {
    app.navigate("program.html", "slide", "F");
}


function showDetails(e) {
    e.preventDefault();

    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    wnd.content(detailsTemplate(dataItem));
    wnd.center().open();
}


