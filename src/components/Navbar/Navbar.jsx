import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const items = [
  { key: "1", label: <Link to="/">Home</Link> },
  { key: "2", label: <Link to="/">About</Link> },
  { key: "3", label: <Link to="/">Contact</Link> },
];

const NavbarComponent = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div className="logo" style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        MyApp
      </div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} items={items} style={{ flex: 1, minWidth: 0 }} />

      <div>
        <Link to="/login">
          <Button type="default" style={{ marginRight: "10px" }}>Đăng nhập</Button>
        </Link>
        <Link to="/signup">
          <Button type="primary">Đăng ký</Button>
        </Link>
      </div>
    </Header>
  );
};

export default NavbarComponent