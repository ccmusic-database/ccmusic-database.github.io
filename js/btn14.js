var btn14 = document.getElementById('btn14')
var spread14 = document.getElementById('spread14')
var iSpread14 = false
var height14 = spread14.scrollHeight
var time14 = 500;
var interval14 = 8.4
var speed14 = height14 / (time14 / interval14)
btn14.onclick = function (e) {
    btn14.disabled = 'disabled'
    if (!iSpread14) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed14
            spread14.style.height = speeds + 'px'
            if (parseInt(spread14.style.height) >= height14) {
                clearTimeout(timer)
                btn14.disabled = ''
            }
        }, interval14)
        this.innerHTML = '<a href="#Tech99" class="shou"></a>'
    } else {
        var speeds = height14
        this.innerHTML = '<a href="#Tech99" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed14
            spread14.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn14.disabled = ''
            }
        }, interval14)
    }
    iSpread14 = !iSpread14
}