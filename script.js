window.onload = function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    var color = document.getElementById("pickcolor");
    var grosor = document.getElementById("grosor");
    const limpiar = document.getElementById("borrar");

    limpiar.addEventListener("click", (event) =>{
        ctx.clearRect(0,0,canvas.width,canvas.height)
    })

    canvas.width = window.innerWidth*0.8;
    canvas.height = window.innerHeight*0.6;
    let painting = false;

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    function startPosition(e){
        painting = true;
        draw(e);
    }
    
    function endPosition(e){
        painting=false;
        ctx.beginPath();
    }

    function draw(e){
        if (!painting) return;

        ctx.lineWidth = grosor.value;
        ctx.lineCap = "round";
        ctx.strokeStyle = color.value;

        ctx.lineTo(e.clientX - (canvas.offsetLeft-1), e.clientY - (canvas.offsetTop));
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - (canvas.offsetLeft-1), e.clientY - (canvas.offsetTop));
    }

}