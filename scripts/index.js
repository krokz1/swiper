function newStyleDecorButton() {
    const button = document.querySelector('.refurbished-brands__button');

    if (button) {
        const style = document.createElement('style');
        style.innerHTML = `
            .refurbished-brands__button::before {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
                .refurbished-brands__button::after {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;

        document.head.appendChild(style);
    } else {
        console.warn('Элемент с классом "refurbished-brands__button" не найден.');
    }
}

function defoltStyleDecorButton() {
    const button = document.querySelector('.refurbished-brands__button');

    if (button) {
        const style = document.createElement('style');
        style.innerHTML = `
            .refurbished-brands__button::before {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
                .refurbished-brands__button::after {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;

        document.head.appendChild(style);
    } else {
        console.warn('Элемент с классом "refurbished-brands__button" не найден.');
    }
}


const button = document.getElementById('toggle-visibility');
const hiddenSlides = document.querySelectorAll('.swiper-slide[style*="display: none"]');

button.addEventListener('click', function() {
    let allVisible = true; 

    hiddenSlides.forEach(slide => {
        if (slide.style.display === 'none' || slide.style.display === '') {
            allVisible = false; 
        }
    });

    if (!allVisible) {
        hiddenSlides.forEach(slide => {
            slide.style.display = 'block'; 
        });
        button.textContent = 'Скрыть'; 
        newStyleDecorButton();
    } else { 
        hiddenSlides.forEach(slide => {
            slide.style.display = 'none'; 
        });
        button.textContent = 'Показать все';
        defoltStyleDecorButton();
    }
});

