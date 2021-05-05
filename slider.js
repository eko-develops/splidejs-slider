//Make sure target element is loaded if initialized on head
document.addEventListener("DOMContentLoaded", () => {
    //To add options, pass an object as a second argument of the Splide constructor     https://splidejs.com/options/
    new Splide( '.splide', {
        type: 'loop',
        perPage: 1,
        // width: "66.5%", instead i'll control the slider size with css
        lazyLoad: "nearby",
        preloadPages: "1",
        pagination: false,
    } ).mount(); 
});
