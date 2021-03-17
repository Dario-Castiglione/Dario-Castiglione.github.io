

setTimeout('f1()',300);
setTimeout('f2()',1000);
function f1()
  {
        var a = document.createElement("STYLE");
        var b = document.createTextNode(`
          #text-1{
            font-size:5.2em;
            text-shadow: 9px 9px 11px rgba(150, 150, 150, 1);
            transition: 1s;


          }
        `);
        a.appendChild(b);
        document.head.appendChild(a);

}
function f2()
  {
        var a = document.createElement("STYLE");
        var b = document.createTextNode(`
          #text-1{
            font-size: 5em;
            text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
            transition: 1s;
            line-height:82%;
          }
        `);
        a.appendChild(b);
        document.head.appendChild(a);

}
function fun3()
  {
        var a = document.createElement("STYLE");
        var b = document.createTextNode(`
        #one{
          visibility:visible;
          transition:2s;
        }

        `);
        a.appendChild(b);
        document.head.appendChild(a);

}

function fun4()
  {
        var a = document.createElement("STYLE");
        var b = document.createTextNode(`
        #two{
          visibility:visible;
          transition:2s;
        }

        `);
        a.appendChild(b);
        document.head.appendChild(a);

}

function fun5()
  {
        var a = document.createElement("STYLE");
        var b = document.createTextNode(`
        #three{
          visibility:visible;
          transition:2s;
        }

        `);
        a.appendChild(b);
        document.head.appendChild(a);

}
