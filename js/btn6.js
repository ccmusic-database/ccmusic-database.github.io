var btn6 = document.getElementById('btn6')
var spread6 = document.getElementById('spread6')
var iSpread6 = false
var height6 = spread6.scrollHeight
var time6 = 500;
var interval6 = 8.4
var speed6 = height6 / (time6 / interval6)
btn6.onclick = function (e) {
    btn6.disabled = 'disabled'
    if (!iSpread6) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed6
            spread6.style.height = speeds + 'px'
            if (parseInt(spread6.style.height) >= height6) {
                clearTimeout(timer)
                btn6.disabled = ''
            }
        }, interval6)
        this.innerHTML = '<a href="#shou6" class="shou"></a>'
    } else {
        var speeds = height6
        this.innerHTML = '<a href="#shou6" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed6
            spread6.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn6.disabled = ''
            }
        }, interval6)
    }
    iSpread6 = !iSpread6
}