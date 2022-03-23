<H1>Фоновая музыка</H1><br>

<script>
<!--
var sound1="mkombat.mid";
var sound2="airwolf.mid";
var sound3="20fox.mid";
var sound4="xfile.mid";
var sound5="2001spce.mid";
var x=Math.round(Math.random()*4);
if (x==0) x=sound1;
else if (x==1) x=sound2;
else if (x==2) x=sound3;
else if (x==3) x=sound4;
else x=sound5;
if (navigator.appName=="Microsoft Internet Explorer")
    document.write('<bgsound id="SND" src='+'"'+x+'"'+' loop="infinite">');
else
    document.write('<embed id="SND" src='+'"'+x+'"'+'hidden="true" border="0" width="20" height="20" autostart="true" loop="true"  volume=100>');
-->
</script>

<p align="left"><font size="3">Файлы, которые используются скриптом
<a onmousedown="SND.src='mkombat.mid'">mkombat.mid</a>,
<a onmousedown="SND.src='airwolf.mid'">airwolf.mid</a>,
<a onmousedown="SND.src='20fox.mid'">20fox.mid</a>,
<a onmousedown="SND.src='xfile.mid'">xfile.mid</a>,
и <a onmousedown="SND.src='2001spce.mid'">2001spce.mid</a>.
</font></p>
