import { auth, GoogleAuthProvider, signInWithPopup, firestore, doc, getDoc, setDoc } from '../firebase/Firebase';
import { FILM_CHICKS_AVTAR_IMG } from '../Constant';
import { addUser } from '../redux/slice/UserSlice';

export const signInWithGoogle = async (dispatch, navigate, setErrorMessage) => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const { uid, displayName, email, photoURL } = user;

        // Create or update user document in Firestore
        // const userDocRef = doc(firestore, 'users', uid);
        // const userDoc = await getDoc(userDocRef);

        // if (!userDoc.exists()) {
        //     await setDoc(userDocRef, {
        //         email: email,
        //         displayName: displayName,
        //         photoURL: photoURL || FILM_CHICKS_AVTAR_IMG,
        //         openAiKey: null,
        //         searchLimit: 2,
        //     });
        // }

        // Get Firestore doc & set to user store
        // const userData = (await getDoc(userDocRef)).data();
        dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
        }));
        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
        }));

        navigate('/browse');
    } catch (error) {
        setErrorMessage(error.message);
    }
};
