var btn9 = document.getElementById('btn9')
var spread9 = document.getElementById('spread9')
var iSpread9 = false
var height9 = spread9.scrollHeight
var time9 = 500;
var interval9 = 8.4
var speed9 = height9 / (time9 / interval9)
btn9.onclick = function (e) {
    btn9.disabled = 'disabled'
    if (!iSpread9) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed9
            spread9.style.height = speeds + 'px'
            if (parseInt(spread9.style.height) >= height9) {
                clearTimeout(timer)
                btn9.disabled = ''
            }
        }, interval9)
        this.innerHTML = '<a href="#shou9" class="shou"></a>'
    } else {
        var speeds = height9
        this.innerHTML = '<a href="#shou9" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed9
            spread9.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn9.disabled = ''
            }
        }, interval9)
    }
    iSpread9 = !iSpread9
}