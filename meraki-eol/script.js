let devices = [
    {
        "model": "MX68"
    },
    {
        "model": "MX68"
    },
    {
        "model": "MX68"
    },
    {
        "model": "MX84"
    },
    {
        "model": "MX100"
    },
    {
        "model": "MS120-24"
    },
    {
        "model": "MS210-24P"
    },
    {
        "model": "MR42"
    },
    {
        "model": "MR46"
    },
    {
        "model": "MG21-HW-WW"
    },
    {
        "model": "MG51-HW-WW"
    },
];

let merakiEOL = [
    {
        "Product": "MX84",
        "Announcement": "Aug 10, 2021",
        "End-of-Sale Date": "Oct 31, 2021",
        "End-of-Support Date": "Oct 31, 2026"
    },
    {
        "Product": "MX100",
        "Announcement": "Aug 10, 2021",
        "End-of-Sale Date": "Feb 1, 2022",
        "End-of-Support Date": "Feb 1, 2027"
    }
];


function getEOLInfo(devices, merakiEOL) {
    // Count the different models in devices, then check each model against merakiEOL Product:
    // Then create a new array with the model, count, and EOL information if available.
    let modelCounts = devices.reduce((acc, device) => {
        acc[device.model] = (acc[device.model] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(modelCounts).map(model => {
        let eolData = merakiEOL.find(eol => eol.Product === model);
        return {
            model: model,
            count: modelCounts[model],
            eol: eolData ? eolData["End-of-Support Date"] : null
        };
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let eolArray = getEOLInfo(devices, merakiEOL);

    console.log("eolArray", eolArray);
});