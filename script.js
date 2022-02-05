function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //validate input, aaccept positive numbers only
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    //show interest calculation result, hihglight values
    } else {
        document.getElementById("result").innerHTML=
        `<br>If you deposit <span class="highlight">${principal}</span>, <br>
        at an interest rate of <span class="highlight">${rate}%</span>. <br>
        You will receive an amount of <span class="highlight">${interest}</span>, <br>
        in the year <span class="highlight">${year}</span><br>`
    
    }

    
}
//show rate
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval +"%";
}
