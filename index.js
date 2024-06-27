let colors = ['red', 'yellow', 'green'];
var i = 0;

function trafficSignals() {
    var l = document.getElementsByClassName("light");
    for(let j =0;j<l.length;j++)
        {
            if(j==i)
                {
                    l[j].style.backgroundColor=colors[i];
                }
                else{
                    l[j].style.backgroundColor="black";
                }
        }
        i = (i+1)%colors.length;
        setTimeout(trafficSignals,3000);
    };
    trafficSignals();