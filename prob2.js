>let num = 7;
let fact = 0;

for(let i = 1; i<num;i++)
{
if(n % i == 0)
{
fact++;
}
}

if(fact == 0)
{
console.log("Prime")
}
else
{
console.log("Not Prime")
}



let str = "mam";
let bag = "";
for(let i = str.length;i>=0;i--)
{
bag+=str[i];
}
if(bag != str)
{
console.log("Palindrome")
}
else
{
console.log("Not a Palindrome")
}