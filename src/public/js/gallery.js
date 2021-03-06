$(document).ready(function() {

    $(document).on('click','.hover-shadow',function(){
        $("#galleryModal").show();
        var index = parseInt($(this).attr('id').replace(/[^\d]/g, ''), 10);
        currentSlide(index);
    });

    $(document).on('click','.demo',function(){
        var index = parseInt($(this).attr('id').replace(/[^\d]/g, ''), 10);
        currentSlide(index);
    });

    $(document).on('click','.closeGalleryCursor',function(){
        $("#galleryModal").hide();
    });

    $(document).on('click','.prev',function(){
        plusSlides(-1);
    });

    $(document).on('click','.next',function(){
        plusSlides(1);
    });

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("gallerySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = $("#caption");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.text(dots[slideIndex - 1].alt);
    }

});