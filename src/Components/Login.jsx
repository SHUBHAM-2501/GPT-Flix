import Header from "./Header";
import { useState, useRef } from "react";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constants";

export default function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, seterrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + " " + errorMessage);
        });
    } else {
      //log in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen bg-cover object-cover"
          src={BG_URL}
          alt="Background-img"
        />
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full bg-gray-800"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errMessage}</p>

        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm ? "New user! Sign up first" : "Sign In to continue"}
        </p>
      </form>
    </div>
  );
}
