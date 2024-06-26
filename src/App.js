import React, { useEffect, useMemo } from 'react'
import Body from './components/body/Body';
import Header from './components/header/Header';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './utils/firebase/Firebase';
import { useDispatch, useSelector } from 'react-redux';
// import { addUser, removeUser } from './utils/redux/slice/UserSlice';
import { useLocation, useNavigate } from 'react-router-dom';
// import { getFirebaseStoreDoc } from './utils/helper/getFirebaseStoreDoc';
import { FILM_CHICKS_BACKGROUND_IMG } from './utils/Constant';

function App() {

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const gpt = useSelector((store) => store.gpt);
  // const locationPathname = useMemo(() => location.pathname, [location.pathname]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const { uid, displayName, email, photoURL } = user;
  //       console.log('User signed in:', { uid, displayName, email, photoURL });

  //       try {
  //         // const docData = await getFirebaseStoreDoc(uid);
  //         // console.log('Document data:', docData);

  //         dispatch(addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         }));

  //         // Only navigate to /browse if the current route is not /browse/
  //         if (!locationPathname.startsWith('/browse')) {
  //           navigate('/browse');
  //         }
  //       } catch (error) {
  //         console.error('Error fetching Firebase document:', error);
  //       }
  //     } else {
  //       console.log('User signed out');
  //       dispatch(removeUser());
  //       navigate('/');
  //     }
  //   });

  //   // Unsubscribe when the component unmounts
  //   return () => unsubscribe();
  // }, [dispatch, navigate, locationPathname]);

  // useEffect(() => {
  //   // Check if user data exists in localStorage on component mount
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     dispatch(addUser(JSON.parse(storedUser)));
  //   }
  // }, [dispatch]);

  useEffect(() => {
    navigate("/browse")
  }, []);

  return (
    <section className='bg-no-repeat bg-fixed bg-cover bg-blend-screen'
      style={gpt.showRecommendation || location.pathname === '/' ? { backgroundImage: `url(${FILM_CHICKS_BACKGROUND_IMG}) ` } : { background: "black" }}>

      <div className='app max-w-screen-2xl mx-auto relative w-full min-h-[100vh] overflow-x-hidden'>
        <Header />
        <Body />
      </div>
    </section>
  );
}

export default App;
