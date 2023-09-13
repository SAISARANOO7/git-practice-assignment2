let str = "mam";
let bag = "";
for(let i = str.length;i>=0;i--)
{
bag+=str[i];
}
if(bag == str)
{
console.log("Palindrome")
}
else
{
console.log("Not a Palindrome")
}
