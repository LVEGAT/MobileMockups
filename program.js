var gridProgram, gridConfigProgram;

$(document).ready(function () {


    gridConfigProgram = {
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

});

function viewInitProgram(e) {
    
    $("#gridProgram").kendoGrid(gridConfigProgram); 
}

function saveProgram()
{
    app.navigate("detailCtrl.html");
}