var a,b,c,d,e;

function display()
{
	var a=document.getElementById("num1").value;
	var b=document.getElementById("num2").value;
	var c=document.getElementById("num3").value;
	var d=document.getElementById("num4").value;
	var e=Math.floor((Math.random()*10000)+1);
	
	  sessionStorage.setItem('num1', a);
      sessionStorage.setItem('num2', b);
	  sessionStorage.setItem('num3', c);
      sessionStorage.setItem('num4', d);
	  sessionStorage.setItem('num5',e);
}

function submit()
{
	var a = sessionStorage.getItem('num1');
	var b = sessionStorage.getItem('num2');
    var c = sessionStorage.getItem('num3');
	var d = sessionStorage.getItem('num4');
	var e = sessionStorage.getItem('num5');


            document.getElementById('Name').textContent = a;
            document.getElementById('Email').textContent = b;
			document.getElementById('Mobile').textContent = c;
            document.getElementById('Password').textContent = d;
			document.getElementById('accno').textContent = e;


            document.getElementById('detailsContainer').style.display = 'block';
        }

function withdraw()
{
	var f=parseInt(document.getElementById("num6").value);
	var g=parseInt(document.getElementById("num7").value);
	var e = sessionStorage.getItem('num5');
	var x=10000;
	if(f==e && g>0)
	{
	document.getElementById('result2').innerHTML=x-g;
	}
	else
	{
	document.getElementById('result2').innerHTML="ERROR";
	}
}
function deposit()
{
	var h=parseInt(document.getElementById("num8").value);
	var i=parseInt(document.getElementById("num9").value);
	var e = sessionStorage.getItem('num5');
	var x=10000;
	if(h==e && i>0)
	{
	document.getElementById('result1').innerHTML=x+i;
	}
	else
	{
	document.getElementById('result1').innerHTML="ERROR";
	}
}