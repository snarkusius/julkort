const canvas = document.createElement("canvas")

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
document.body.appendChild(canvas)
const ctx = canvas.getContext("2d")

ctx.fillStyle = "red"
ctx.fillRect(0,0,document.body.clientWidth,document.body.clientHeight)
function triangel(x,y,Hight,whith,colur) {
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+whith,y)
    ctx.lineTo(x+whith/2,y-Hight)
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.fillRect = "green"
    ctx.fill()
    ctx.closePath()  
}
function drawtre(x,y) {
    triangel(x,y,25,50)
    triangel(x+5,y-20,25,40)
    triangel(x+10,y-40,25,30) 
    ctx.beginPath()
    ctx.fillStyle = "brown"
    ctx.fillRect(x,y,10,10) 
}
// setInterval(myfunk,5)
drawtre(100,100)
