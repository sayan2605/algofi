async function selectionSort(delay = 3) 
{
    disable();
    let bars = document.querySelectorAll(".bar");
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) {
        
        min_idx = i;
        bars[i].style.backgroundColor = "darkblue";
        for (var j = i + 1; j < bars.length; j += 1) {
            bars[j].style.backgroundColor = "red";
            
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 3)
            );
            
            var val1 = parseInt(bars[min_idx].childNodes[0].innerHTML);
            var val2 = parseInt(bars[j].childNodes[0].innerHTML);
            
            
            if (val1 > val2)
            {
                if (min_idx !== i)
                {
                    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)"; //sky-blue
                }
                min_idx = j;
            }
            else
            {
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)"; //sky-blue
            }
        }
        // To swap ith and (min_idx)th bar
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3)
        );
        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
        
        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
        
        
    }
    enable();
}

function disable()
{
    // To disable the button "Generate New Array"
    document.querySelector(".newarr").disabled = true;
    document.querySelector(".newarr").style.backgroundColor = "#D7D7D7";
    document.querySelector(".newarr").style.cursor = "not-allowed";
    
    // To disable the button "Selection Sort"
    document.querySelector(".sselection").disabled = true;
    document.querySelector(".sselection").style.backgroundColor = "#D7D7D7";
    document.querySelector(".sselection").style.cursor = "not-allowed";

}

function enable()
{
    // To enable the button "Generate New Array" after final(sorted)
    document.querySelector(".newarr").disabled = false;
    document.querySelector(".newarr").style.backgroundColor = "#1F2041";
    document.querySelector(".newarr").style.cursor = "pointer";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.querySelector(".sselection").disabled = false;
    document.querySelector(".sselection").style.backgroundColor = "#1F2041";
    document.querySelector(".sselection").style.cursor = "pointer";   
}