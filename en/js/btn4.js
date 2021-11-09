var btn4 = document.getElementById('btn4')
var spread4 = document.getElementById('spread4')
var iSpread4 = false
var height4 = spread4.scrollHeight
var time4 = 500;
var interval4 = 8.4
var speed4 = height4 / (time4 / interval4)
btn4.onclick = function (e) {
    btn4.disabled = 'disabled'
    if (!iSpread4) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed4
            spread4.style.height = speeds + 'px'
            if (parseInt(spread4.style.height) >= height4) {
                clearTimeout(timer)
                btn4.disabled = ''
            }
        }, interval4)
        this.innerHTML = '<a href="#shou4" class="shou"></a>'
    } else {
        var speeds = height4
        this.innerHTML = '<a href="#shou4" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed4
            spread4.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn4.disabled = ''
            }
        }, interval4)
    }
    iSpread4 = !iSpread4
}