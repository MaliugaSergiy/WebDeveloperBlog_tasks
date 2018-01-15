$(function () {
    
    $(".nano").nanoScroller();
    $(".nano-pane, .has-scrollbar").on("click", function (e) {
        e.preventDefault();
    });

    function createSlick() {

        $('.slick-carousel').not('.slick-initialized').slick({
            fade: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1000,
        });

    }

    createSlick();
    $(window).on('resize', createSlick);

    $('.prevBtn').click(function () {
        $('.slick-carousel').slick("slickPrev");
    });
    $('.nextBtn').click(function () {
        $('.slick-carousel').slick("slickNext");
    });

    $("#callBackForm").validate({
        rules: {
            inputName: {
                required: true,
                minlength: 2,
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputPhone: {
                required: true,
                minlength: 10,
                digits: true
            }
        },
        messages: {
            inputName: {
                required: "Поле обязательное для заполнения"
            },
            inputEmail: {
                required: "Поле обязательное для заполнения",
                email: "Введите корректный Email"
            },
            inputPhone: {
                required: "Поле обязательное для заполнения"
            }
        },
        focusCleanup: true,
        focusInvalid: false
    });
    $("#inputPhone").mask('(000) 000-00-00');


//    setTimeout(function () {
//        $(".preloaderOverlay").addClass("dn");
//    }, 2000);
//    setTimeout(function () {
//        $(".preloaderOverlay").css("display", "none");
//    }, 4000);


});
