import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }: any) {
  const { user, loadingUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('hiiisdfhsad');
  }, []);

  useEffect(() => {
    if (!loadingUser && !user) router.push('/sign-in');
  }, [router, loadingUser, user]);

  return <>{user && children}</>;
}
export default ProtectedRoute;
