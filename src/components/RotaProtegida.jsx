import React from 'react'
import { Navigate } from 'react-router-dom'

const RotaProtegida = ({ children, tipoPermitido }) => {
  const dadosSalvos = localStorage.getItem('usuarioLogado')
  const usuario = dadosSalvos ? JSON.parse(dadosSalvos) : null

  if (!usuario || (tipoPermitido && usuario.tipoUsuario !== tipoPermitido)) {
    
    localStorage.removeItem('usuarioLogado')
    
    return <Navigate to="/login" replace />
  }

  return children
}

export default RotaProtegida