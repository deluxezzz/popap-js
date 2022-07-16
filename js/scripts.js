let popup = document.querySelector('.popup');
let popupPlay = document.querySelector('.popup-play');

let popupClose = document.querySelector('.popup__close');
let widthScroll = window.innerWidth - document.documentElement.clientWidth +'px';

if (popup && popupPlay){
    popupPlay.addEventListener('click', function(e){
        popup.classList.toggle('open');
        document.body.classList.toggle('scroll-off');
        
        document.body.style.paddingRight = widthScroll;
        
    });

    popupClose.addEventListener('click', function(e){
        popup.classList.toggle('open');
        setTimeout(()=>{
            document.body.classList.toggle('scroll-off');
            document.body.style.paddingRight = null;
        },500);
        event.preventDefault()
    });
}