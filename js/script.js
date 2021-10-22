function crearRegistro(){

	const tabla = document.getElementById('tabla');

	var request = new XMLHttpRequest();

	request.open('GET', 'https://www.datos.gov.co/resource/c2fr-ezse.json', true);

	request.onload = function() {
		if (request.readyState === 4) {
			if (request.status === 200) {
				
				var json =  JSON.parse(request.responseText);

				for(let i in json) {

					const tr = document.createElement('tr');

					const td = document.createElement('th');
					td.textContent = json[i].direccion;
					tr.appendChild(td);

					const td2 = document.createElement('th');
					td2.textContent = json[i].tipo_de_residuos;
					tr.appendChild(td2);

					const td3 = document.createElement('th');
					td3.textContent = json[i].raz_n_social;
					tr.appendChild(td3);

					tabla.tBodies[0].appendChild(tr);
				}
			}
		}
	}

	request.send();


	
}



document.getElementById('boton').onclick = crearRegistro;