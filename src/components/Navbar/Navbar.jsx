import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";

import { logout } from "../../store/auth/AuthSlice";

const { Header } = Layout;

const publicItems = [
  { key: "1", label: <Link to="/">Home</Link> },
  { key: "2", label: <Link to="/features">Features</Link> },
  { key: "3", label: <Link to="/pricing">Pricing</Link> },
];

const privateItems = [
  { key: "1", label: <Link to="/dashboard">Home</Link> },
  { key: "2", label: <Link to="/search">Search</Link> },
];

const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="logo"
        style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
      >
        MyApp
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={!accessToken ? publicItems : privateItems}
        style={{ flex: 1, minWidth: 0 }}
      />

      <div>
        {!accessToken ? (
          <>
            <Link to="/login">
              <Button type="default" style={{ marginRight: "10px" }}>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button type="primary">Signup</Button>
            </Link>
          </>
        ) : (
          <Button type="primary" onClick={handleLogout}>
            Log out
          </Button>
        )}
      </div>
    </Header>
  );
};

export default NavbarComponent;
