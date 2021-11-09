var btn1 = document.getElementById('btn1')
var spread1 = document.getElementById('spread1')
var iSpread1 = false
var height1 = spread1.scrollHeight
var time1 = 500;
var interval1 = 8.4
var speed1 = height1 / (time1 / interval1)
btn1.onclick = function (e) {
    btn1.disabled = 'disabled'
    if (!iSpread1) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed1
            spread1.style.height = speeds + 'px'
            if (parseInt(spread1.style.height) >= height1) {
                clearTimeout(timer)
                btn1.disabled = ''
            }
        }, interval1)
        this.innerHTML = '<a href="#shou1" class="shou"></a>'
    } else {
        var speeds = height1
        this.innerHTML = '<a href="#shou1" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed1
            spread1.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn1.disabled = ''
            }
        }, interval1)
    }
    iSpread1 = !iSpread1
}