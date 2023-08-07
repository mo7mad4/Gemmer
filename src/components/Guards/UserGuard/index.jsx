import React from 'react'
import { useAuthContext } from '../../../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../../../constants/roles';
import { PATHS } from '../../router/paths';

const UserGuard = () => {
  const { role } = useAuthContext();
  if(role === ROLES.USER) return <Outlet />
  if(role === ROLES.ADMIN) return <Navigate to={PATHS.HOME } replace={true} />
    return <Navigate to={PATHS.LOGIN} replace={true} />
}

export default UserGuard;