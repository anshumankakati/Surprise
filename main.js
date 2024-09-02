document.querySelector('#readMoreBtn').addEventListener('click', function() {
    const parts = document.querySelectorAll('.part');
    const images = [
        './1.jpg',  // Replace this with the actual image path for "Happy Birthday!"
        '/IMG-20240801-WA0032.jpg',  // Replace this with the actual image path for "About My Sister"
        '/IMG-20240801-WA0033.jpg'   // Replace this with the actual image path for "Wishing You All the Best"
    ];
    const dots = document.querySelectorAll('.dot');

    let currentPart = document.querySelector('.part.active') 
                      ? [...parts].indexOf(document.querySelector('.part.active')) 
                      : -1;
    currentPart = (currentPart + 1) % parts.length;

    const showPart = (index) => {
        parts.forEach((part, i) => {
            part.classList.remove('active');
            if (i === index) {
                part.classList.add('active');
            }
        });

        document.querySelector('#mainImage').src = images[index];

        dots.forEach((dot, i) => {
            dot.classList.remove('active-dot');
            if (i === index) {
                dot.classList.add('active-dot');
            }
        });
    };

    if (currentPart === 0) {
        document.getElementById('moreContent').style.display = 'block';
    }

    showPart(currentPart);
});
