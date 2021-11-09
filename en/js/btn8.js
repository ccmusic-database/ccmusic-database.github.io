var btn8 = document.getElementById('btn8')
var spread8 = document.getElementById('spread8')
var iSpread8 = false
var height8 = spread8.scrollHeight
var time8 = 500;
var interval8 = 8.4
var speed8 = height8 / (time8 / interval8)
btn8.onclick = function (e) {
    btn8.disabled = 'disabled'
    if (!iSpread8) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed8
            spread8.style.height = speeds + 'px'
            if (parseInt(spread8.style.height) >= height8) {
                clearTimeout(timer)
                btn8.disabled = ''
            }
        }, interval8)
        this.innerHTML = '<a href="#shou8" class="shou"></a>'
    } else {
        var speeds = height8
        this.innerHTML = '<a href="#shou8" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed8
            spread8.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn8.disabled = ''
            }
        }, interval8)
    }
    iSpread8 = !iSpread8
}