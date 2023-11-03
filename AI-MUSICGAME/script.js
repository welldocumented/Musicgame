document.addEventListener("DOMContentLoaded", function() {
    // Canvas要素を取得
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Canvasサイズを動的に変更する関数
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // 縦に8分割するための線を引く
        var numberOfLines = 8;
        var lineWidth = canvas.width / numberOfLines;

        for (var i = 1; i < numberOfLines; i++) {
            var x = lineWidth * i;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
    }

    // ページがロードされたときとウィンドウのサイズが変更されたときにCanvasをリサイズ
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
});
