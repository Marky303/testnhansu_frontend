import axios from "axios";

const sendRequest = async (e, requestType) => {
  try {
    switch (requestType) {
      case "login":
        await login(e);
        break;
      case "signup":
        await signup(e);
        break;
      case "activate":
        await activate(e);
        break;
      default:
        throw "Request type undefined";
    }
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error) => {
  if (error.response) {
    for (var prop in error.response.data) {
      if (Object.prototype.hasOwnProperty.call(error.response.data, prop)) {
        // error.response.data have multiple types of properties
        // "detail" property is a string containing a message
        // other properties are a list of strings
        switch (prop) {
          case "detail":
            notify("error", error.response.data[prop]);
            break;
          default:
            for (const message of error.response.data[prop])
              notify("error", prop + ": " + message);
        }
      }
    }
  } else {
    notify("error", "Something happened");
    console.log(error);
  }
};

const login = async (e) => {
  const body = {
    email: e.target.email.value,
    password: e.target.password.value,
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

const signup = async (e) => {
  const body = {
    email: e.target.email.value,
    password: e.target.password.value,
    re_password: e.target.re_password.value,
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
