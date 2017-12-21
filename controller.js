var wnd, gridConfig,
    detailsTemplate;
var that = this;

$(document).ready(function () {
    gridConfig = {
        columns: [
            
            { field: "name", title: "Name", width: 100},
            { field: "alarm", title: "Alarms", width: 75 },                        
            { command: { text: "...",width: 75, name: "menu", template: "<a data-role='button' data-rel='actionsheet' href='\\#actionsheet'>Run</a>" }},            
            { command: { text: "...",width: 75, name: "menu", template: " <a href='\\#detailCtrl' data-icon='cart'>Detail</a>" }}
        ],
        dataSource: [
            { name: "Controller 1", alarm: 30 },
            { name: "Controller 2", alarm: 0  },
            { name: "Controller 3", alarm: 10 },
            { name: "Controller 4", alarm: 11 },
            { name: "Controller 5", alarm: 12 }
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

function showDetailsCtrl(e)
{      
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


