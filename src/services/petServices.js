import api from './api';

export async function getAllPets(filters = {}){
    try {
        const response = await api.get('/pets/searchAll', {
            params: filters,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};