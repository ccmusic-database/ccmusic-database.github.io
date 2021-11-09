var btn5 = document.getElementById('btn5')
var spread5 = document.getElementById('spread5')
var iSpread5 = false
var height5 = spread5.scrollHeight
var time5 = 500;
var interval5 = 8.4
var speed5 = height5 / (time5 / interval5)
btn5.onclick = function (e) {
    btn5.disabled = 'disabled'
    if (!iSpread5) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed5
            spread5.style.height = speeds + 'px'
            if (parseInt(spread5.style.height) >= height5) {
                clearTimeout(timer)
                btn5.disabled = ''
            }
        }, interval5)
        this.innerHTML = '<a href="#shou5" class="shou"></a>'
    } else {
        var speeds = height5
        this.innerHTML = '<a href="#shou5" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed5
            spread5.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn5.disabled = ''
            }
        }, interval5)
    }
    iSpread5 = !iSpread5
}