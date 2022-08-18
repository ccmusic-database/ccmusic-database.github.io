var btn12 = document.getElementById('btn12')
var spread12 = document.getElementById('spread12')
var iSpread12 = false
var height12 = spread12.scrollHeight
var time12 = 500;
var interval12 = 8.4
var speed12 = height12 / (time12 / interval12)
btn12.onclick = function (e) {
    btn12.disabled = 'disabled'
    if (!iSpread12) {
        var speeds = 0
        var timer = setInterval(function () {
            speeds += speed12
            spread12.style.height = speeds + 'px'
            if (parseInt(spread12.style.height) >= height12) {
                clearTimeout(timer)
                btn12.disabled = ''
            }
        }, interval12)
        this.innerHTML = '<a href="#GZTech" class="shou"></a>'
    } else {
        var speeds = height12
        this.innerHTML = '<a href="#GZTech" class="shou"></a>'
        var timer = setInterval(function () {
            speeds -= speed12
            spread12.style.height = speeds + 'px'
            if (speeds <= 0) {
                clearTimeout(timer)
                btn12.disabled = ''
            }
        }, interval12)
    }
    iSpread12 = !iSpread12
}