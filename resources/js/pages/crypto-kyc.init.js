/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Crypto-kyc init Js File
*/


// Checkout nav tab
if(document.querySelectorAll(".checkout-tab"))
Array.from(document.querySelectorAll(".checkout-tab")).forEach(function (form) {

    // next tab
    if(form.querySelectorAll(".nexttab"))
    form.querySelectorAll(".nexttab").forEach(function (nextButton) {
        var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
        Array.from(tabEl).forEach(function (item) {
            item.addEventListener('show.bs.tab', function (event) {
                event.target.classList.add('done');
            });
        });
        nextButton.addEventListener("click", function () {
            var nextTab = nextButton.getAttribute('data-nexttab');
            document.getElementById(nextTab).click();
        });
    });

    //Pervies tab
    if(form.querySelectorAll(".previestab"))
    Array.from(form.querySelectorAll(".previestab")).forEach(function (prevButton) {

        prevButton.addEventListener("click", function () {
            var prevTab = prevButton.getAttribute('data-previous');
            var totalDone = prevButton.closest("form")
            for (var i = totalDone - 1; i < totalDone; i++) {
                (prevButton.closest("form").querySelectorAll(".custom-nav .done")[i]) ? prevButton.closest("form").querySelectorAll(".custom-nav .done")[i].classList.remove('done') : '';
            }
            document.getElementById(prevTab).click();
        });
    });

    // Step number click
    var tabButtons = form.querySelectorAll('button[data-bs-toggle="pill"]');
    if (tabButtons)
    Array.from(tabButtons).forEach(function (button, i) {
        button.setAttribute("data-position", i);
        button.addEventListener("click", function () {
            (form.querySelectorAll(".custom-nav .done").length > 0) ?
                Array.from(form.querySelectorAll(".custom-nav .done")).forEach(function (doneTab) {
                    doneTab.classList.remove('done');
                })
                : '';
            for (var j = 0; j <= i; j++) {
                tabButtons[j].classList.contains('active') ?  tabButtons[j].classList.remove('done') :  tabButtons[j].classList.add('done');
            }
        });
    });
});

// Dropzone
var dropzonePreviewNode = document.querySelector("#dropzone-preview-list");
if(dropzonePreviewNode){
    dropzonePreviewNode.id = "";
    var previewTemplate = dropzonePreviewNode.parentNode.innerHTML;
    dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode);
}
if(document.querySelector('.dropzone'))
    var dropzone = new Dropzone(".dropzone", {
        url: 'https://httpbin.org/post',
        method: "post",
        previewTemplate: previewTemplate,
        previewsContainer: "#dropzone-preview",
    });