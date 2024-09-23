import { useContext } from 'react';
import AppRouters from './AppRouters';
import AuthRouters from './AuthRouters';
import AuthContext from '../contexts/auth';

export default function Routers() {
  const {signed} = useContext(AuthContext)
  return (
    <>
        { signed ? <AuthRouters /> : <AppRouters /> }     
    </>
  );
}