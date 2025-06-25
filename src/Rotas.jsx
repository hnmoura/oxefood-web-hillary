import { Route, Routes } from "react-router-dom";
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';
import FormProduto from './views/produto/FormProduto';
import { ProtectedRoute } from './views/util/ProtectedRoute';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FormLogin />} />
                <Route
                    path="/home" element={
                        <ProtectedRoute>
                            <Home /> </ProtectedRoute>} />
                <Route
                    path="/list-cliente"
                    element={
                        <ProtectedRoute>
                            <ListCliente />
                        </ProtectedRoute>
                    }
                />
                <Route path="form-cliente" element={<FormCliente />} /> 
                <Route path="form-produto" element={<FormProduto />} />
                <Route path="form-entregador" element={<FormEntregador />} />
            </Routes>
        </>
    )
}

export default Rotas; 
