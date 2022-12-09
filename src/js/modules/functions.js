export function isWebp() {
    function testWebp(callback) {
        let webp = new Image();
        webp.onload = webp.onerror = function () {
            callback(webp.height == 2);
        };
        webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.getAttribute('data-popup') == "popup1-button") {
            document.querySelector('.popup[data-popup="popup1"]').classList.remove('popup_close');
            document.querySelector('.popup[data-popup="popup1"]').classList.add('popup_active');

        }
        else if (e.target.classList.contains('form__button') || e.target.classList.contains('popup__close-button')) {
            document.querySelector('.popup[data-popup="popup1"]').classList.add('popup_close');
            setTimeout(() => {
                document.querySelector('.popup[data-popup="popup1"]').classList.remove('popup_active');
            }, 300);
        }
        else if (e.target.classList.contains('popup__overlay')) {
            
            
            if (document.querySelector('.popup[data-popup="popup1"]').classList.contains('popup_active')) {
                document.querySelector('.popup[data-popup="popup1"]').classList.add('popup_close');
                setTimeout(() => {
                    document.querySelector('.popup[data-popup="popup1"]').classList.remove('popup_active');
                }, 300);
            }
        }
    });





});
