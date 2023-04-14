import axios from "axios";
const baseURL = "http://localhost:8080";

const getAll = async () => {
    const results = await axios.get(baseURL + "/user/FindAll");
    console.log(results);
    return results.data;
}

const getPartner = async () => {
    const results = await axios.get(baseURL + "/user/Partner");
    console.log(results);
    return results.data;
}

const userAdd = async (user) => {
    const results = await axios.post(baseURL + "/user/Save");
    console.log(results);
    return results.data;
}

const userEdit = async (user) => {
    const results = await axios.put(baseURL + "/user/Update");
    console.log(results);
    return results.data;
}

const userDelete = async (id) => {
    const results = await axios.delete(baseURL + "/user/Delete/"+id);
    console.log(results);
    return results.data;
}

export {getAll,getPartner,userAdd,userEdit,userDelete}
