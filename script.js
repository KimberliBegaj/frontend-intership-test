document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        breakpoints: {
            1024: {
                perView: 2
            },
            600: {
                perView: 1
            }
        }
    }).mount();
});
