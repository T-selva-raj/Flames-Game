
var result=document.getElementById("result");
function clearResult()
{
document.getElementById("container").style.backgroundImage='none';
document.getElementById("you").value="";
document.getElementById("partner").value="";
document.getElementById('result').innerHTML="";


}


function flame(name1,name2)
{

	var flames=['f','l','a','m','e','s'];
	var i,j,k=-1,l=0,count=0;
	var relation;
	name1=name1.toLowerCase();
	name2=name2.toLowerCase();
	var array1=name1.split("");
	var array2=name2.split("");
	var big=array1.length>array2.length?array1:array2;
	var small=array1.length<array2.length?array1:array2;
	for(i=0;i<big.length;i++)
	{
		for(j=0;j<small.length;j++)
		{
			if(big[i]==small[j])
			{
			big[i]=small[j]='\0';
			break;
			}
		}
	
	}
	for(i=0;i<big.length;i++)
	if(big[i]!='\0')
	count++;
		for(j=0;j<small.length;j++)
	if(small[j]!='\0')
	count++;
	for(i=0;i<flames.length-1;i++)
	{
		for(j=1;j<=count;j++)
		{
			l=0;
			k++;
			if(k>=flames.length)
			k=0;
			while(flames[k]=='\0')
				{
			k++;
			if(k>=flames.length)
			k=0;
		
			}
		}
		flames[k]='\0';
	}
for(i=0;i<flames.length;i++)
if(flames[i]!='\0')
		relation=flames[i];
if(name1=="" || name2==""){
		window.alert("enter names");
}
else{
	switch(relation)
	{
		case 'f':
			 result.innerHTML="YOU AND  "+name2+" ARE FRIENDS";
			 document.getElementById("container").style.backgroundImage='url("friends.jpg")';
			document.getElementById("container").style.backgroundSize='cover';
			document.getElementById("container").style.backgroundPosition='center';
			break;
		case 'l':
			result.innerHTML="YOU AND  "+name2+" ARE LOVERS";
			document.getElementById("container").style.backgroundImage='url("love.jpg")';
			document.getElementById("container").style.backgroundSize='cover';
			document.getElementById("container").style.backgroundPosition='center';
			break;
		case 'a':
			result.innerHTML=name2+" HAS AFFECTION ON YOU";
			document.getElementById("container").style.backgroundImage='url("affectinate.jpg")';
			document.getElementById("container").style.backgroundSize='cover';
			document.getElementById("container").style.backgroundPosition='center';
			break;
		case 'm':
			result.innerHTML="YOU WILL MARRY "+name2;
			document.getElementById("container").style.backgroundImage='url("marrige.jpg")';
			document.getElementById("container").style.backgroundSize='cover';
			document.getElementById("container").style.backgroundPosition='center';
			break;
		case 'e':
			result.innerHTML="YOU AND "+name2+" ARE ENEMIES";
			document.getElementById("container").style.backgroundImage='url("enemy.jpg")';
			document.getElementById("container").style.backgroundSize='cover';
			document.getElementById("container").style.backgroundPosition='center';
			break;
		case 's':
			result.innerHTML="YOU AND "+name2+" ARE SIBLINGS";
			document.getElementById("container").style.backgroundImage='url("siblings.jpg")';
			document.getElementById("container").style.backgroundSize='cover';
			document.getElementById("container").style.backgroundPosition='center';
			break;
	}




}

}
