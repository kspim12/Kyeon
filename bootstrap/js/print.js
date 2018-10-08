var fnPrint = function(){
    var strFeature = "width=329, height=703, all=no";
    var image = document.getElementById('printArea6').getAttribute('src');
    // alert(image);
    var mywindow = window.open('', 'print', strFeature);
    mywindow.document.write("<html>");
    mywindow.document.write("<head><title>print window</title></head>");
    // mywindow.document.write("<img src='" + image + "' ></img>");
    mywindow.document.write("<body>");
    mywindow.document.write("<img src='" + image + "'></img>");
    mywindow.document.write("</body>");
    mywindow.document.write("</html>");
    mywindow.print();
    mywindow.close();
}


function projectToPrint(source) {
    return "<html><head><script>function step1(){\n" +
            "setTimeout('step2()', 10);}\n" +
            "function step2(){window.print();window.close()}\n" +
            "</scri" + "pt></head><body onload='step1()'>\n" +
            "<img src='" + source + "' /></body></html>";
}
function projectPrint(source) {
    var strFeature = "width=329, height=703, all=no";
    var pwa = window.open('', 'print', strFeature);
    // Pagelink = "about:blank";
    // var pwa = window.open('', "print");
    pwa.document.open();
    pwa.document.write(projectToPrint(source));
    pwa.document.close();
}