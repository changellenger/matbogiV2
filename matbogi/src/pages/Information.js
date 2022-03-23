import Button from '@mui/material/Button'
import { getDatabase , ref, set} from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup,   signOut, signInWithRedirect , getRedirectResult  } from "firebase/auth";


async function signInWithGoogle(){
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);

}

function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
}



// signInWithRedirect(auth, provider);
//
// getRedirectResult(auth)
//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//
//         // The signed-in user info.
//         const user = result.user;
//     }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
// });


function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

const LikedList = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Button variant="outlined" id="dbinput" sx={{ml:10}} onClick={writeUserData('aa-14','bb','cc','dd')} >asdf</Button>


            <Button variant="outlined" id="glogin" sx={{ml:10}} onClick={signInWithGoogle} >google Login</Button>

            <Button variant="outlined" id="glogin" sx={{ml:10}} onClick={signOutUser} >google Logout</Button>
        </div>
    );
};
export default LikedList;