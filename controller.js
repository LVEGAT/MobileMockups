var wnd, gridConfig,
    detailsTemplate;
var that = this;

$(document).ready(function () {
    gridConfig = {
        columns: [
            { field: "name", title: "Name" },
            { field: "alarm", title: "Alarms" },
            { field: "sensor", title: "Sensors" },
            // { command: { text: "Details",name:"details", click: showDetails } },
            { command: { text: "...", name: "menu", template: "<a data-role='button' data-rel='actionsheet' href='\\#actionsheet'>Run</a>" } },
            { command: { text: "...", name: "menu", template: "<a data-role='button' data-rel='actionsheet' href='\\#actionProgram'>Program</a>" } }
        ],
        dataSource: [
            { name: "Controller 1", alarm: 30, sensor: "3 Sensor" },
            { name: "Controller 2", alarm: 0, sensor: "2 Sensor" },
            { name: "Controller 3", alarm: 10, sensor: "No Sensors" },
            { name: "Controller 4", alarm: 11, sensor: "No Sensors" },
            { name: "Controller 5", alarm: 12, sensor: "No Sensors" }
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
    detailsTemplate = kendo.template($("#template").html());

});

function viewInitCtl(e) {
    $("#gridCtrl").kendoGrid(gridConfig);
}

function showDetails(e) {
    e.preventDefault();

    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    wnd.content(detailsTemplate(dataItem));
    wnd.center().open();
}

function showMenu(e) {
    app.navigate("#actionsheet", "slide", "A");
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



