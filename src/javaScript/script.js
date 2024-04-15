document.addEventListener("DOMContentLoaded", function () {


    //OBSERVERS FOR SLIDE IN AND UP ELEMENTS
    function handleSlidesIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let animationClass;
                if (entry.target.classList.contains('slide-left')) {
                    animationClass = 'animate-slide-left';
                } else if (entry.target.classList.contains('slide-up')) {
                    animationClass = 'animate-slide-up';
                } else if (entry.target.classList.contains('slide-right')) {
                    animationClass = 'animate-slide-right';
                }

                entry.target.classList.add(animationClass);

                observer.unobserve(entry.target);
            }
        });
    }

    // Initialize Intersection Observers for each class
    const slideLeftElements = document.querySelectorAll('.slide-left');
    const slideUpElements = document.querySelectorAll('.slide-up');
    const slideRightElements = document.querySelectorAll('.slide-right');

    const slideLeftObserver = new IntersectionObserver(handleSlidesIntersection, {
        threshold: .7,
    });
    slideLeftElements.forEach((element) => {
        slideLeftObserver.observe(element);
    });

    const slideUpObserver = new IntersectionObserver(handleSlidesIntersection, {
        threshold: .7,
    });
    slideUpElements.forEach((element) => {
        slideUpObserver.observe(element);
    });

    const slideRightObserver = new IntersectionObserver(handleSlidesIntersection, {
        threshold: .7,
    });
    slideRightElements.forEach((element) => {
        slideRightObserver.observe(element);
    });

    /// COUNTERS
    const counterElements = document.querySelectorAll('.counter');

    function updateCounter(countSpan, targetNumber, currentCount) {
        const maxInterval = 2500; // Maximum interval in milliseconds
        const step = Math.ceil(targetNumber / (maxInterval / 16.67)); // Calculate the step based on the target number and maximum interval
        const newCount = Math.min(currentCount + step, targetNumber);

        countSpan.textContent = newCount;

        if (newCount < targetNumber) {
            requestAnimationFrame(() => updateCounter(countSpan, targetNumber, newCount));
        }
    }

    // OBSERVERS FOR COUNTERS
    const observers = [];

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const countSpan = entry.target.querySelector('.count');
                const targetNumber = parseInt(countSpan.textContent, 10);

                updateCounter(countSpan, targetNumber, 0);
                observer.unobserve(entry.target);
            }
        });
    }

    counterElements.forEach((counterElement, index) => {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
        observers.push(observer);
        observer.observe(counterElement);
    });
});