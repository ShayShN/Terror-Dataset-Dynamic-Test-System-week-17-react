const API_URL = "http://localhost:3001"

export async function getDataTerrorists() {
    try {
        const result = await fetch(API_URL + "/api/getdata", {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
        })
        const data = await result.json();
        console.log(data);
        
        return data;
    } catch (error) {
        
    }
}