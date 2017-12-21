var gridConfigAlarm;

$(document).ready(function () {


    gridConfigAlarm = {
        columns: [
            { field: "site", title: "Site" },
            { field: "controller", title: "Controller" },
            { field: "device", title: "Device" },
            { field: "program", title: "Program" },
            { field: "startTime", title: "Start Time" },
            { field: "description", title: "Description" },
            { field: "reason", title: "Reason" },
            { field: "mode", title: "Mode" }
        ],
        dataSource: [
            {
                site: "(01) SITE 01",
                controller: "(050) CONTROLLER 50 ",
                device: "",
                program: "PROGRAM A",
                startTime: "10/29/2016 12:00:01 AM",
                description: "Not implemented: (ALMLOG code = 15)",
                reason: "",
                mode: "-----"
            },
            {
                site: "(01) SITE 01",
                controller: "(050) CONTROLLER 50 ",
                device: "----",
                program: "PROGRAM C",
                startTime: "10/30/2016 11:24:01 AM",
                description: "No water window violation",
                reason: "Alarmed",
                mode: "-----"
            },
        ],
        filterable: true,
        columnMenu: true,
        mobile: "phone",
        height: "auto"
    };

}); 


function viewInitAlarm(e) {
    $("#gridAlarm").kendoGrid(gridConfigAlarm);
}

