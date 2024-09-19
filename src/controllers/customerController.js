import { getAllCustomers } from '../services/customerService.js';

export const getCustomers = async (req, res) => {
    try{
        const customers = await getAllCustomers();
        res.json(customers)
    }
    catch (error) {
        res.state(500).json({
            error: "Erro ao buscar os clientes",
        });
    }
}