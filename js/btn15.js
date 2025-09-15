var btn15 = document.getElementById('btn15')
var spread15 = document.getElementById('spread15')
var iSpread15 = false
var height15 = spread15.scrollHeight
var time15 = 500;
var interval15 = 8.4
var speed15 = height15 / (time15 / interval15)
btn15.onclick = function (e) {
    btn15.disabled = 'disabled'
    if (!iSpread15) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed15
            spread15.style.height = speeds + 'px'
            if (parseInt(spread15.style.height) >= height15) {
                clearTimeout(timer)
                btn15.disabled = ''
            }
        }, interval15)
        this.innerHTML = '<a href="#xfid" class="shou"></a>'
    } else {
        var speeds = height15
        this.innerHTML = '<a href="#xfid" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed15
            spread15.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn15.disabled = ''
            }
        }, interval15)
    }
    iSpread15 = !iSpread15
}