module.exports.pri=(n)=>{
for(let i=2;i<n;i++)
{
    if(i%n==0)
    {
        return false;
    }
    else
    {
        return true;
    }
}
}