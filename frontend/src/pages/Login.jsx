// import React from "react";
// // import GoogleButton from "react-google-button";
// // import GoogleLoginButton from "react-google-login-button";
// // import GoogleLogin from "react-google-login";
// import axios from "axios";

// const Login = () => {
//   const url = "http://127.0.0.1:8000/api/auth";
//   const responseGoogle = (response) => {
//     console.log(response);
//     // Send token to backend for verification
//     console.log(response.tokenId);
//     axios
//       .post(url, { token: response.tokenId })
//       .then((res) => {
//         console.log(res.data);
//         // Handle successful authentication
//       })
//       .catch((err) => {
//         console.log(err);
//         // Handle authentication error
//       });
//   };

//   return (
//     // <GoogleLoginButton onClick={responseGoogle} />
//     <GoogleLogin
//       clientId="92731732774-0h1sfmut72l3otkjnptkfvl2a1u5ofre.apps.googleusercontent.com"
//       buttonText="Login with Google"
//       onSuccess={responseGoogle}
//       onFailure={responseGoogle}
//       cookiePolicy={"single_host_origin"}
//     />
//   );
// };

// export default Login;
