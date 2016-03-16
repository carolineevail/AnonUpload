function getFiles(filesData) {
    for (var i in filesData) {
        var elem = $("<a>");
        elem.attr("href", "files/" + filesData[i].filename);
        elem.text(filesData[i].originalFilename);
        $("#fileList").append(elem);
        var elem2 = $("<br>");
        $("#fileList").append(elem2);
    }
}

$.get("/files", getFiles);