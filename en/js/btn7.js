var btn7 = document.getElementById('btn7')
var spread7 = document.getElementById('spread7')
var iSpread7 = false
var height7 = spread7.scrollHeight
var time7 = 500;
var interval7 = 8.4
var speed7 = height7 / (time7 / interval7)
btn7.onclick = function (e) {
    btn7.disabled = 'disabled'
    if (!iSpread7) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed7
            spread7.style.height = speeds + 'px'
            if (parseInt(spread7.style.height) >= height7) {
                clearTimeout(timer)
                btn7.disabled = ''
            }
        }, interval7)
        this.innerHTML = '<a href="#shou7" class="shou"></a>'
    } else {
        var speeds = height7
        this.innerHTML = '<a href="#shou7" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed7
            spread7.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn7.disabled = ''
            }
        }, interval7)
    }
    iSpread7 = !iSpread7
}