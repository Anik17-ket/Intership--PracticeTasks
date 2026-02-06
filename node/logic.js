function tbl(n)
{
    for(let i=1;i<=10;i++){
        console.log(i*n)
    }
}

function even(n)
{
 if(n%2==0){
  console.log("It is even")
 }
 else{
    console.log("it is odd")
 }
    }

module.exports={tbl,even}
