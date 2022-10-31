import axios from 'axios';
import { useEffect, useState } from 'react';
import ArrowRight from '../../components/icons/ArrowRight';
import ItemCard from '../../components/ItemCard';
import { useAuth } from '../../context/AuthContext';

function UserPage() {
  const { user, logout, setDisplayName } = useAuth();
  const [userProfile, setUserProfile] = useState<any>({});
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    try {
      const getProfile = async () => {
        const response = await axios.get(`users/user-id`);
        setUserProfile(response.data);
      };

      getProfile();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    user && setUsername(user.displayName);
  }, [user]);

  //this is only client-side validated
  const handleSubmitUsername = async (e: any) => {
    try {
      e.preventDefault();
      setErrorMessage('');

      if (username) await setDisplayName(username);
      else setErrorMessage('Missing username');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="page-center">
      <div className="flex sm:items-end flex-col sm:flex-row">
        <div>
          <h1>
            <form
              className="max-w-[20rem]"
              onSubmit={(e) => handleSubmitUsername(e)}
            >
              <input
                type="text"
                placeholder="Set username"
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-white bg-neutral-800 rounded-md px-2 w-full big-heading"
              />
            </form>
          </h1>
          {errorMessage && (
            <div className="text-red-500 text-sm h-4">{errorMessage}</div>
          )}
        </div>
        <button
          className="sm:ml-8 clickable-white w-fit"
          onClick={() => logout('/')}
        >
          <span className="text-right">Logout </span>
          <ArrowRight />
        </button>
      </div>
      <section className="py-8">
        <div className="med-heading inline-block mb-2">Purchases</div>
        {userProfile?.purchases?.length === 0 ? (
          <div>You haven&apos;t made any purchases.</div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {userProfile?.purchases?.map((itemCard: any, i: any) => (
              <ItemCard key={i} itemCard={itemCard} />
            ))}
          </div>
        )}
      </section>
      <section className="py-8">
        <div className="med-heading inline-block mb-2">
          Items created by {username}
        </div>
        {userProfile?.purchases?.length === 0 ? (
          <div>You haven&apos;t made any items.</div>
        ) : (
          <>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {userProfile?.creations?.map((itemCard: any, i: any) => (
                <ItemCard key={i} itemCard={itemCard} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
export default UserPage;
