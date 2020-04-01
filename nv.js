$(document).ready(function(){
	var block = document.createElement("div");
	block.innerHTML = `
		<table class="vis" width="100%">
			<tbody>
				<tr>
					<th colspan="3">
						<span id="default_name_span">
							<span id="default_name">Nemesvágó Script</span>
						</span>
					</th>
					
				</tr>
				<tr>
					<td>Időpont:</td>
					<td>
						<input type="text" name="idopont" id="idopont" value="" placeholder="00:00:00" style="text-align: center" />
					</td>
					<td>Azt az időpontot kell megadni másodpercre pontosan, amikor indítanod kell!</td>
					
				</tr>
				<tr>
					<td>Milliszekundum:</td>
					<td>
						<input type="text" name="ms" id="ms" value="" placeholder="000" style="text-align: center" />
					</td>
					<td>Azt az ms kell megadni, amivel a két nemes közé be tudsz időzíteni!</td>
					
				</tr>
				
			</tbody>
		</table>
	`;
	var button = document.createElement("button");
	button.className="btn";
	button.innerHTML="Élesítve";
	button.addEventListener("click", function (){
		var myVar = setInterval(myTimer, 1);
		var time;
		var start
		var idopont = document.getElementById("idopont").value;
		var ms = parseInt(document.getElementById("ms").value);
		
		console.log(idopont);
		console.log(ms);
		function myTimer() {
		  time = document.getElementById("serverTime").innerText;
		  if(time == idopont){
			setTimeout(() => { $(".troop_confirm_go").click(); }, ms);
			}   
		}
	});
	
	var element = document.getElementById("content_value");
	element.insertBefore(button, element.childNodes[0]);
	element.insertBefore(block, element.childNodes[0]);
}); 
