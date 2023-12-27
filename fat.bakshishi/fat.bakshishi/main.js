function totali(){
    let fatura=document.getElementById("fatura").value;  //vlerat e vendosur nga user (>=110,>=300,>=500)

    let bakshishi;  //perllogaritja e bakshishit
    if(fatura>=100){bakshishi=((fatura * 5) / 100)}; // per fatura >=100 bakshishi eshte 5% e fatures
    if(fatura>=300){bakshishi=((fatura * 10) / 100)}; // per fatura >=300 bakshishi eshte 10% e fatures
    if(fatura>=500){bakshishi=((fatura * 15) / 100)}; // per fatura >=500 bakshishi eshte 15% e fatutes
    document.getElementById("bakshishi").value=bakshishi; //vlera e bakshishit e shfaqur ne baze te var "bakshishi"
    
    let rezultati;  //perllogaritja e totalit
    rezultati=parseFloat(fatura) + parseFloat(bakshishi); //totali eshte vlera e vendosur nga user+ bakshishi
    document.getElementById("rezultati").value=rezultati; // totali per tu paguar ne baze te var "rezultati"

    
   
} 





