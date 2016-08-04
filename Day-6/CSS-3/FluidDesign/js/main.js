$(window).load(function() {
    $(".menu-btn").click(function () {
        $(this).toggleClass('active');
        $('#main-navigation ul').slideToggle();
        return false;
    });
});