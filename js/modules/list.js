"use strict";

function list() {
	const dataTable = document.querySelector(`.data-table`),
		dataHead = dataTable.querySelector(`thead`),
		dataHeadRow = dataHead.querySelector(`tr`),
		dataBody = dataTable.querySelector(`tbody`);

	function addListHead(keys) {
		keys.forEach(key => {
			let head = `<th>
				<a>${key}</a>
			</th>`;
			dataHeadRow.innerHTML += head;
		});
	}

	function addListRow(arr) {
		for(let i = 0; i < arr.length; i++) {
			dataBody.innerHTML += 
				`<tr>
					<td>
						<a>${i + 1}</a>
					</td>
				</tr>`;
		}
	}

	let i = 0;
	function addListInfo(array) {

		let dataHeadRows = dataBody.querySelectorAll(`tr`);
		
		for(let value of array) {

			if(!isNaN(value)) {

				let numberValue = +value;
				
				dataHeadRows[i].innerHTML += 
				`<td>
					<a>${numberValue.toFixed(2)}</a>
				</td>`;

			} else {

				dataHeadRows[i].innerHTML += 
				`<td>
					<a>${value}</a>
				</td>`;

			}
		}

		i++;
	}

	function objsFromArray(array) {
		for(let obj of array) {
			let objValues = Object.values(obj);

			addListInfo(objValues);
		}
	}

	let cryptoParse = function() {

		fetch(`https://api.jsonbin.io/b/62027c8e4ce71361b8d33d75`)
		.then(response => response.json())
		.then(value => {
			let objKeys = Object.keys(value[0]);

			addListHead(objKeys);
			addListRow(value);
			objsFromArray(value);
		});
	}

	cryptoParse();
}

list();

export default list;