import axios from "axios";

export async function fetchVoters(){
    try {
        const response=await axios.get("http://127.0.0.1:5000/voter");
        return response.data;
        //console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

export async function saveVoter(voterData){
    try {
        const response=await axios.post("http://127.0.0.1:5000/voter",voterData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteVoter(phone){
    try {
        const response=await axios.delete(`http://127.0.0.1:5000/voter/${phone}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateVoter(updatedData,phone){
    try {
        const response=await axios.put(`http://127.0.0.1:5000/voter/${phone}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchVotersbyphone(phone){
    try {
        const response=await axios.get(`http://127.0.0.1:5000/voter/${phone}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}