$(document).ready(function() {
   
    var $work = $('#work');

    $work.imagesLoaded(function() {

        $work.masonry({
            itemSelector: '.work__item',
            columnWidth: '.work__sizer',
            percentPosition: true,
            horizontalOrder: true,
            transitionDuration: 200
        });
    });

    $work.lightGallery({
        selector: '.work__item',
        download: false
    });
});
