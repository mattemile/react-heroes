import axios from "axios";
const baseUrl = 'http://localhost:3001/heroes';

/*Lettura*/
const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data)
};

/*Aggiunta*/
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
};

/*Modifica*/
const update = (id, newObject) => {
    const request = axios.put('http://localhost:3001/heroes/' + id, newObject)
    return request.then(response => response.data)
};

/*Delete*/
const deleteHero = id => {
    const request = axios.delete('http://localhost:3001/heroes/' + id)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    update,
    deleteHero
}
