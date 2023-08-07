import React from 'react'
import { useAuthContext } from '../../../Context/AuthContext'
import { ROLES } from '../../../constants/roles';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const GuestGuards = ({ children }) => {
  const { role } = useAuthContext();
  if(role === ROLES.ADMIN)
    return <Navigate to={PATHS.ADMIN} replace={true} />
  if(role === ROLES.USER)
    return <Navigate to={PATHS.HOME} replace={true} />
  return <Navigate to={PATHS.LOGIN} replace={true} />;
}

export default GuestGuards