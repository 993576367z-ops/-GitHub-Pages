// 滚动出现动画
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// 初始化隐藏
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
});
