
$(document).ready(function() {
    $(".pricing .box").click(function() {
        $(this).toggleClass("deactive")
    })

    $(".faq .content .box").click(function() {
        $(this).toggleClass("deactive")
    })

    $("#menubar").click(function() {
        $(".header .navbar").toggleClass("active")
    })
})