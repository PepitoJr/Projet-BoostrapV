$("section").hide();
$(".alert").hide();
$("document").ready(
   
            $("section").fadeTo(1000, 1)
   
);
$(".tail1").click(function(e)
{
    e.preventDefault();
    $(".alert").fadeIn(2000);
});
/*$("document").ready(
     $(window).scroll(
            function(){
                var scrollPosition=$(window).scrollTop();
                var positionCorps=$(".corps").offset().top;
                if(scrollPosition>=positionCorps)
                    {
                        $(".corps").fadeTo(1000, 0.9)
                    }
            }
        )
)*/
