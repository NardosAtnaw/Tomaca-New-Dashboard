import React, { useState } from "react";
import { Grid, Card } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  //   const { enqueueSnackbar } = useSnackbar();
  //   const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();
    // axios
    //   .post("/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then(function (response: any) {
    //     if (response.data.status === 200) {
    //       enqueueSnackbar("Login Success", { variant: "success" });
    //        navigate("/index");
    //     }
    //   })
    //   .catch(function (error: Error) {
    //     enqueueSnackbar("Login Failed", { variant: "error" });
    //   });
    // navigate("/index");
    // enqueueSnackbar("Login Success", { variant: "success" });
  };
  return (
    <div className="h-[100vh] w-full grid place-items-center relative  bg-no-repeat bg-cover bg-center bg-[url('/assets/images/HQtomoca.png')]  ">
      {/* <img src={TomocaHQ} alt="" /> */}
      <div className=" w-full h-full bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg grid place-items-center  ">
        <Card className="w-[80rem] pr-10 mt-10 rounded-3xl">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <img
                className="w-full grid place-items-center "
                src="/assets/images/Tomoca.png"
                alt="Tomoca Images"
              />
            </Grid>
            <Grid className="grid place-items-center h-[60vh] " item xs={6}>
              <img
                className="w-20 mt-5 "
                src="/assets/images/logofull.svg"
              ></img>
              <h2 className="text-2xl text-[#FF7A11] font-bold mt-10  ">
                ADMIN LOGIN
              </h2>
              <p className="w-[25rem] text-[#C2C2C1] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              </p>
              <form>
                <input
                  className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10 py-3 px-2 leading-tight outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                  aria-label="Username"
                  name="UserName"
                />
                <input
                  className="my-5 appearance-none border-b border-x-0 border-t-0 border-black w-full text-black mr-10 py-3 px-2 leading-tight outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  name="Password"
                />   <Link href="/dashboard">
                <button
                  onClick={(e) => handleLogin(e)}
                  className="w-full p-2 mt-10 text-white bg-[#FF7A11]"
                >
              Login
          
                </button>   </Link>
              </form>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}
