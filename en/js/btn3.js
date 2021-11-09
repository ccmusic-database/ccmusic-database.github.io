var btn3 = document.getElementById('btn3')
var spread3 = document.getElementById('spread3')
var iSpread3 = false
var height3 = spread3.scrollHeight
var time3 = 500;
var interval3 = 8.4
var speed3 = height3 / (time3 / interval3)
btn3.onclick = function (e) {
    btn3.disabled = 'disabled'
    if (!iSpread3) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed3
            spread3.style.height = speeds + 'px'
            if (parseInt(spread3.style.height) >= height3) {
                clearTimeout(timer)
                btn3.disabled = ''
            }
        }, interval3)
        this.innerHTML = '<a href="#shou3" class="shou"></a>'
    } else {
        var speeds = height3
        this.innerHTML = '<a href="#shou3" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed3
            spread3.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn3.disabled = ''
            }
        }, interval3)
    }
    iSpread3 = !iSpread3
}