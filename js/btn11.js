var btn11 = document.getElementById('btn11')
var spread11 = document.getElementById('spread11')
var iSpread11 = false
var height11 = spread11.scrollHeight
var time11 = 500;
var interval11 = 8.4
var speed11 = height11 / (time11 / interval11)
btn11.onclick = function (e) {
    btn11.disabled = 'disabled'
    if (!iSpread11) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed11
            spread11.style.height = speeds + 'px'
            if (parseInt(spread11.style.height) >= height11) {
                clearTimeout(timer)
                btn11.disabled = ''
            }
        }, interval11)
        this.innerHTML = '<a href="#shou11" class="shou"></a>'
    } else {
        var speeds = height11
        this.innerHTML = '<a href="#shou11" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed11
            spread11.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn11.disabled = ''
            }
        }, interval11)
    }
    iSpread11 = !iSpread11
}