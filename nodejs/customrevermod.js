module.exports.rev=(n)=>
{
    n = n + "";
	return n.split("").reverse().join("");
}