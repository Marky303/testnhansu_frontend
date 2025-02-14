import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

import { login } from "../../store/auth/AuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = (values) => {
    dispatch(login({values, navigate}));
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={handleSubmit}
    >
      <Form.Item name="email">
        <Input
          prefix={<UserOutlined />}
          type="text"
          placeholder="Email"
          disabled={loading}
        />
      </Form.Item>
      <Form.Item name="password">
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          disabled={loading}
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" disabled={loading}>
          Log in
        </Button>
        or <a href="/signup">Register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;
