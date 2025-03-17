function calculateDays() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 2, 22); // 3月22日,月份从0开始计数
    
    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = Math.abs(birthday - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerText = `距离生日还有 ${diffDays} 天`;

    if (diffDays === 0) {
        showCake();
        showRandomWish();
    }
}

const wishes = [
    "愿你拥有一个美好的生日！",
    "祝你生日快乐，幸福满满！",
    "愿你的每一天都充满阳光和笑声！",
    "祝你在新的一岁里实现所有梦想！",
    "愿你永远健康快乐，心想事成！"
];

function showRandomWish() {
    const wishElement = document.getElementById('wishes');
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    wishElement.textContent = randomWish;
}

function showCake() {
    const cake = document.getElementById('cake');
    cake.classList.add('show');
    showRandomWish();
}

function hideCake() {
    const cake = document.getElementById('cake');
    cake.classList.remove('show');
}

// 页面加载时自动计算
window.onload = calculateDays;
