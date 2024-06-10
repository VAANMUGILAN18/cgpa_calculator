var count=0;

function myfun()
{
    const d1=document.getElementById("d1");
    
    var ic=count+1

    const text1=document.createElement("input");
    const label1=document.createElement("label");
    label1.textContent="SUBJECT";
    label1.id="l1"+ic;
    text1.type="text";
    text1.id="s1"+ic;
    text1.className="s1";
    d1.appendChild(label1);
    d1.appendChild(text1);


    const text2=document.createElement("input");
    const label2=document.createElement("label");
    label2.textContent="GRADE";
    label2.id="l2"+ic;
    text2.type="text";
    text2.id="s2"+ic;
    text2.className="s2";
    d1.appendChild(label2);
    d1.appendChild(text2);


    const text3=document.createElement("input");
    const label3=document.createElement("label");
    label3.textContent="CREDIT";
    label3.id="l3"+ic;
    text3.type="number";
    text3.id="s3"+ic;
    text3.className="s3";
    d1.appendChild(label3);
    d1.appendChild(text3);


    const text4=document.createElement("button");
    text4.textContent="DELETE";
    text4.type="button";
    text4.id="bn"+ic;
    d1.appendChild(text4);

    text4.addEventListener("click", function () {
        const a = document.getElementById("s1"+ic);
        const b = document.getElementById("s2"+ic);
        const c = document.getElementById("s3"+ic);
        const d=document.getElementById("l1"+ic);
        const e=document.getElementById("l2"+ic);
        const f=document.getElementById("l3"+ic);
        const btn=document.getElementById("bn"+ic);
        
        a.remove();
        d.remove();
        b.remove();
        e.remove();
        c.remove();
        f.remove();
        btn.remove();
        count = count - 1;
    });
    
    count=count+1;
}

let creditValues = [];
let subValues=[];
let grValues=[];
let g = [];

function save() 
{
    const creditInputs = document.querySelectorAll(".s3");
    const sub=document.querySelectorAll(".s1");
    const gr=document.querySelectorAll(".s2");
    // Clear previous values
    grValues = [];
    subValues=[];
    creditValues=[];

    sub.forEach(input => {
        subValues.push(input.value);
    });

    gr.forEach(input => {
        grValues.push(input.value);
    });

    // Loop through creditInputs and store values in grValues array
    creditInputs.forEach(input => {
        creditValues.push(Number(input.value));
    });
    
    g=[];

    for(var i=0;i<count;i++)
    {
        if(grValues[i]==='A'||grValues[i]==='a')
        {
            g[i]=8;
        }
        else if(grValues[i]==="a+"||grValues[i]==="A+")
        {
            g[i]=9;
        }
        else if(grValues[i]==="O"||grValues[i]==="o")
        {
            g[i]=10;
        }
        else if(grValues[i]==="B"||grValues[i]==="b")
        {
            g[i]=6;
        }
        else if(grValues[i]==="B+"||grValues[i]==="b+")
        {
            g[i]=7;
        }
        else
        {
            g[i]=5;
        }
    }

    var y=0;
    var x=0;

    for(let i=0;i<count;i++)
    {
        x=x+creditValues[i];
        y=y+(creditValues[i]*g[i]);
    }

    var x1=document.getElementById("cg").value;
    var gpa=(y/x).toFixed(2);
    if(x1!=0.0)
    {
        var a1=parseFloat(x1)+parseFloat(gpa);
        var a2=(a1/2).toFixed(2);
    }
    else
    {
        a2=gpa;
    }
    

    
    document.getElementById("p1").innerHTML=a2;
}