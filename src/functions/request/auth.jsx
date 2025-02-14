import axios from "axios";
import notify from "../../functions/toastify/notify";

const sendRequest = async (e, requestType) => {
  try {
    switch (requestType) {
      case "login":
        return await sendLoginRequest(e);
      case "signup":
        return await sendSignupRequest(e);
      default:
        throw "Request type undefined";
    }
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  const errorList = error.response.data.error;
  if (errorList) {
    for (const error of errorList) {
      notify("error", error);
    }
  } else {
    notify("error", "Something happened");
    console.log(error);
  }
};

const sendLoginRequest = async (e) => {
  const body = {
    email: e.email,
    password: e.password,
  };

  const response = await axios.post(
    import.meta.env.VITE_BACKEND_LOGIN_ENDPOINT,
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response && response.status == 200) {
    notify("success", "Welcome back!");
    return response.data.access;
  } else {
    throw e;
  }
};

const sendSignupRequest = async (e) => {
  const body = {
    email: e.email,
    password: e.password,
    repassword: e.repassword,
  };

  const response = await axios.post(
    import.meta.env.VITE_BACKEND_SIGNUP_ENDPOINT,
    body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response && response.status == 200) {
    notify("success", "Signed up successfully");
  } else {
    throw e;
  }
};

export default sendRequest;
