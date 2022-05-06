window.addEventListener('load', () => {
    const canvas = document.getElementById("canvas");
    if(canvas.getContext){
        const draw = canvas.getContext("2d");
        
        draw.beginPath();
        draw.arc(0, 400, 80, Math.PI*1.5, Math.PI*2, false);
        draw.lineTo(80, 700);
        draw.arc(160, 700, 80, Math.PI, Math.PI*2, true);
        draw.lineTo(240, 520);
        draw.arc(320, 520, 80, Math.PI, Math.PI*2, false);
        draw.lineTo(400, 850);
        draw.arc(480, 850, 80, Math.PI, Math.PI*0.5, true);
        draw.lineTo(1024, 930);
        draw.lineWidth = 40;
        draw.strokeStyle = "#505152";
        draw.stroke();

        const draw2 = canvas.getContext("2d");
        
        draw2.beginPath();
        draw.arc(0, 400, 80, Math.PI*1.5, Math.PI*2, false);
        draw.lineTo(80, 700);
        draw.arc(160, 700, 80, Math.PI, Math.PI*2, true);
        draw.lineTo(240, 520);
        draw.arc(320, 520, 80, Math.PI, Math.PI*2, false);
        draw.lineTo(400, 850);
        draw.arc(480, 850, 80, Math.PI, Math.PI*0.5, true);
        draw.lineTo(1024, 930);
        draw2.lineWidth = 1;
        draw2.strokeStyle = "white";
        draw2.setLineDash([5, 5]);
        draw2.stroke();
    }
});
const addContent = (e) => {
    const contentArr = document.querySelectorAll('.contents div');
    const stepArr = document.querySelectorAll('.add');


    for(let i = 0; i < contentArr.length; i++) {
        if(e === stepArr[i]) {
            // innerHTML 값으로 판단
            if(e.innerHTML === '+') {
                e.innerHTML = '-';
                contentArr[i].classList.add('on');
            } else {
                e.innerHTML = '+';
                contentArr[i].classList.remove('on');
            }
        }
    }
}

