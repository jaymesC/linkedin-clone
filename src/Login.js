import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

    }

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    }));
                })
        })
            .catch((error) => alert(error.message));
    }
  return (
    <div className="login">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />

        <button type="submit" onclick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
