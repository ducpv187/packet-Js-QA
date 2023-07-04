$(function () {
    $(".btn").on("click", function () {
        $(".item_qa").removeClass("active");
        $(this).closest("div").css("display", "none");
        let id = $(this).attr("href");
        console.log(id);
        $(id).fadeIn("slow");        
    });
});