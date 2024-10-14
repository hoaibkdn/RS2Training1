export async  function fetchJson(url: string) {
	const data = await fetch(url, {
		method: 'GET',
	})
	const jsonData = await data.json()
	return jsonData
}

export async function updateJson(url : string, body: any, method: 'PUT' | 'POST' | 'PATCH') {
	const response = await fetch(url, {
		method: method || 'POST',
		body: JSON.stringify(body)
	})              
	const data = await response.json()
	return data // server -> 
}

export async function deleteJson(url: string, id: string) {
	
}