var btn13 = document.getElementById('btn13')
var spread13 = document.getElementById('spread13')
var iSpread13 = false
var height13 = spread13.scrollHeight
var time13 = 500;
var interval13 = 8.4
var speed13 = height13 / (time13 / interval13)
btn13.onclick = function (e) {
    btn13.disabled = 'disabled'
    if (!iSpread13) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed13
            spread13.style.height = speeds + 'px'
            if (parseInt(spread13.style.height) >= height13) {
                clearTimeout(timer)
                btn13.disabled = ''
            }
        }, interval13)
        this.innerHTML = '<a href="#PMEmo" class="shou"></a>'
    } else {
        var speeds = height13
        this.innerHTML = '<a href="#PMEmo" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed13
            spread13.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn13.disabled = ''
            }
        }, interval13)
    }
    iSpread13 = !iSpread13
}