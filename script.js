// change the value of n for how many prime numbers you want
var n = 100,i=1;
var arr = [2];
var p=3;
var bull;
while(i<n){
    bull=true
    for(var j=0;j<i;j++){
        if(p%arr[j]==0){
            bull=false;
        }
    }
    if(bull){
        arr[i]=p;
        i++;
    }
    p+=2;
}
document.write(n+" prime numbers below:<br><br>");
for(var w=0;w<n;w++){
    document.write(arr[w]+"<br>");
}