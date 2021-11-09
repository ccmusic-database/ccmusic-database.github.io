var btn2 = document.getElementById('btn2')
var spread2 = document.getElementById('spread2')
var iSpread2 = false
var height2 = spread2.scrollHeight
var time2 = 500;
var interval2 = 8.4
var speed2 = height2 / (time2 / interval2)
btn2.onclick = function (e) {
    btn2.disabled = 'disabled'
    if (!iSpread2) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed2
            spread2.style.height = speeds + 'px'
            if (parseInt(spread2.style.height) >= height2) {
                clearTimeout(timer)
                btn2.disabled = ''
            }
        }, interval2)
        this.innerHTML = '<a href="#shou2" class="shou"></a>'
    } else {
        var speeds = height2
        this.innerHTML = '<a href="#shou2" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed2
            spread2.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn2.disabled = ''
            }
        }, interval2)
    }
    iSpread2 = !iSpread2
}