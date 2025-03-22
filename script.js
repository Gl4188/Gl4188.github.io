function calculateDays() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 2, 22); // 3月22日
    
    const diffTime = Math.abs(birthday - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // 检查是否是生日当天
    if (today.getMonth() === 2 && today.getDate() === 22) {
        document.getElementById('result').innerText = "生日快乐！今天是你的生日！🎉";
        showCake();
        showRandomWish();
    } else {
        if (birthday < today) {
            birthday.setFullYear(today.getFullYear() + 1);
        }
        const newDiffTime = Math.abs(birthday - today);
        const daysUntilNextBirthday = Math.ceil(newDiffTime / (1000 * 60 * 60 * 24));
        document.getElementById('result').innerText = `距离生日还有 ${daysUntilNextBirthday} 天`;
    }
}

const wishes = [
    "小仙女生日快乐！",
    "新的一岁，愿你的宇宙永远有温柔的光!想要的都奔赴你，难过的都绕开你!",
    "二十岁啦！愿你的烦恼像发际线一样只减不增，快乐像存款一样蹭蹭上涨！",
    "愿你的每一天都充满阳光和笑声！",
    "愿你永远健康快乐，心想事成！"
];

function showCake() {
    const cake = document.getElementById('cake');
    cake.classList.add('show');
}

function showRandomWish() {
    const wishElement = document.getElementById('wishes');
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    wishElement.textContent = randomWish;
    wishElement.style.animation = 'none';
    wishElement.offsetHeight; // 触发重排
    wishElement.style.animation = 'fadeIn 1.5s ease';
}

function hideCake() {
    const cake = document.getElementById('cake');
    cake.classList.remove('show');
}

// 页面加载时自动计算
window.onload = calculateDays;
