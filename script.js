// 섹션 간의 스크롤 이동을 위해 필요한 JavaScript 코드
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 클릭 동작 방지
            const targetId = this.getAttribute('href').substring(1); // href에서 '#' 제거
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'  // 부드러운 스크롤
            });
        });
    });
});
