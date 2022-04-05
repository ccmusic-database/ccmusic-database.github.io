var btn10 = document.getElementById('btn10')
var spread10 = document.getElementById('spread10')
var iSpread10 = false
var height10 = spread10.scrollHeight
var time10 = 500;
var interval10 = 8.4
var speed10 = height10 / (time10 / interval10)
btn10.onclick = function (e) {
    btn10.disabled = 'disabled'
    if (!iSpread10) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed10
            spread10.style.height = speeds + 'px'
            if (parseInt(spread10.style.height) >= height10) {
                clearTimeout(timer)
                btn10.disabled = ''
            }
        }, interval10)
        this.innerHTML = '<a href="#shou10" class="shou"></a>'
    } else {
        var speeds = height10
        this.innerHTML = '<a href="#shou10" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed10
            spread10.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn10.disabled = ''
            }
        }, interval10)
    }
    iSpread10 = !iSpread10
}