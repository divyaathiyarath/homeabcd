module.exports.pl=()=>
{
   
    for(var i=2;i<500;i++)
    {
        var count=0;
        for(var j=2;j<i;j++)
        {
            if(i%j==0)
            {
                count++;
            }
        }
        if(count==0)
        {
            console.log(i);
        }
       
    }
}