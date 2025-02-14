import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Row, Col, Form, Input, Button } from "antd";

import { signup } from "../../store/auth/AuthSlice";

const { Content } = Layout;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = (values) => {
    dispatch(login({values, navigate}));
  };

  return (
    <Layout
      style={{
        background: "url(/src/assets/background.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "120dvh",
        margin: 0,
      }}
    >
      <Content>
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
          <Col
            xs={24}
            sm={18}
            md={12}
            lg={8}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(2px)",
              padding: "30px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <Form onFinish={handleSubmit}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  marginBottom: "5px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Sign up
              </p>

              <Form.Item
                name="email"
                label={
                  <span style={{ color: "white" }}>
                    <i className="fa-solid fa-envelope"></i> Email address
                  </span>
                }
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter your email"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={
                  <span style={{ color: "white" }}>
                    <i className="fa-solid fa-key"></i> Password
                  </span>
                }
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item
                name="repassword"
                label={
                  <span style={{ color: "white" }}>
                    <i className="fa-solid fa-check"></i> Confirm password
                  </span>
                }
                rules={[
                  { required: true, message: "Please confirm your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Re-enter your password"
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%", marginTop: "10px" }}
                  type="primary"
                  htmlType="submit"
                  disabled={loading}
                >
                  Submit
                </Button>
              </Form.Item>

              <p
                style={{
                  marginTop: "12px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Already have an account?{" "}
                <a href="/login" style={{ color: "white" }}>
                  Login here!
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default SignUp;
