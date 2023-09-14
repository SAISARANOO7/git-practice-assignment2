let num = 7;
let fact = 0;

for(let i = 1; i<num;i++)
{
if(num % i == 0)
{
fact++;
}
}

if(fact == 2)
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