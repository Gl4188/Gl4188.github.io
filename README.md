<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>吴迪，生日快乐!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f8ff;
            margin: 0;
            overflow: hidden; /* 防止滚动条出现 */
        }
        .container {
            text-align: center;
            position: relative; /* 用于定位祝福语和蛋糕 */
        }
        .message {
            font-size: 2em;
            color: #32cd32;
            margin-bottom: 20px;
            opacity: 1; /* 初始时完全可见 */
            transition: opacity 1s ease-out; /* 添加淡出效果 */
        }
        .cake {
            font-size: 3em;
            color: #ff6347;
            margin-top: 20px;
            opacity: 0; /* 初始时隐藏 */
            transition: opacity 1s ease-in 2s; /* 延迟2秒后淡入 */
        }
        .hidden {
            opacity: 0; /* 用于隐藏元素 */
        }
        .button {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
            margin-top: 40px;
            background-color: #4682b4;
            color: white;
            border: none;
            border-radius: 5px;
            display: none; /* 初始时隐藏按钮 */
        }
        .button:hover {
            background-color: #2f5bb7;
        }
    </style>
</head>
<body onload="showCake()">
    <div class="container">
        <div id="birthdayMessage" class="message">
            吴迪，祝你生日快乐！愿你在新的一岁里，健康快乐，事业有成，每天都充满阳光和笑容！
        </div>
        <div id="birthdayCake" class="cake">🎂</div>
        <button class="button" onclick="showAdditionalMessage()">点击这里获取更多祝福</button>
        <p id="more-message" style="font-size: 1.5em; color: #000; margin-top: 20px; display: none;">愿你的每一个愿望都能如愿以偿，每一个梦想都能照进现实！</p>
    </div>

    <script>
        function showCake() {
            // 设置延迟后隐藏祝福语并显示蛋糕
            setTimeout(function() {
                document.getElementById('birthdayMessage').classList.add('hidden');
                document.getElementById('birthdayCake').style.opacity = '1';
                // 显示按钮（可选）
                document.querySelector('.button').style.display = 'block';
            }, 3000); // 延迟3秒
        }

        function showAdditionalMessage() {
            document.getElementById('more-message').style.display = 'block';
        }
    </script>
</body>
</html>
