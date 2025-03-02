
document.getElementById('color-btn').addEventListener('click' , function(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    const a = (Math.random()*0.5).toFixed(2);
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
    console.log(rgba)
    document.body.style.backgroundColor = rgba;
})
