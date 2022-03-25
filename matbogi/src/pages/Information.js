import Button from '@mui/material/Button'
import { getDatabase , ref, set} from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup,   signOut, setPersistence, browserSessionPersistence, signInWithRedirect , getRedirectResult  } from "firebase/auth";


async function signInWithGoogle(){
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    setPersistence(getAuth(), browserSessionPersistence)
    await signInWithPopup(getAuth(), provider);

}

const signOutUser = function() {
    // Sign out of Firebase.
    signOut(getAuth());
}

const loginCheck = function (){
    console.log("loginCheck");
    console.log(getAuth().currentUser);
    console.log(getAuth().currentUser.displayName);
}

const writeUserData = function (userId, name, email, imageUrl) {
    const db = getDatabase();
    console.log("input")
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}
// <Button variant="outlined" id="dbInput" sx={{ml:10}} onClick={writeUserData('aa-14','bb','cc','dd')} >asdf</Button>
const Information = () => {
    return (
        <div>
            <h1>내정보</h1>
            <p>로그인 관련 처리 + 사용자 계정 정보</p>

            <Button variant="outlined" id="dbInput" sx={{ml:10}} onClick={() => {writeUserData('aa-14','bb','cc','dd');}} >asdf</Button>

            <Button variant="outlined" id="glogIn" sx={{ml:10}} onClick={signInWithGoogle} >google Login</Button>

            <Button variant="outlined" id="glogOut" sx={{ml:10}} onClick={signOutUser} >google Logout</Button>

            <Button variant="outlined" id="glogCheck" sx={{ml:10}} onClick={loginCheck} >login Check</Button>
        </div>
    );
};
export default Information;