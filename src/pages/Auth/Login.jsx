import React from 'react';
import { Layout, Row, Col, Button, Checkbox, Form, Input, Flex } from 'antd';
const { Content } = Layout;

const Login = () => {

  const onFinish = (values) => {
    console.log("Logging in with:", values);
    alert("Đăng nhập thành công!");
  };

  return (
    <Layout
      style={{
        background: 'url(/src/asset/background.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '120dvh',
        margin: 0,
      }}
    >
      <Content>
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Col
            xs={24} sm={18} md={12} lg={8}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(2px)',
              padding: '30px',
              borderRadius: '10px',
              marginTop: '20px',
            }}
          >
            <Form
              name="login"
              initialValues={{ remember: true }}
              style={{ maxWidth: 360 }}
              onFinish={onFinish}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  fontSize: '30px',
                  marginBottom: '5px',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Login
              </p>

              <Form.Item
                name="email"
                label={<span style={{ color: 'white' }}><i className="fa-solid fa-envelope"></i> Email </span>}
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input type="email"/>
              </Form.Item>
              <Form.Item
                name="password"
                label={<span style={{ color: 'white' }}><i className="fa-solid fa-key"></i> Password </span>}
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input type="password" />
              </Form.Item>
              <Form.Item>
                <Flex justify="space-between" align="center">
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox
                    style={{ color: 'white' }}
                    >Remember me</Checkbox>
                  </Form.Item>
                  <a href="">Forgot password</a>
                </Flex>
              </Form.Item>

              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Log in
                </Button>
                <p
                  style={{
                    marginTop: '12px',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  or <a href="/signup">Register now!</a>
                </p>
                
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login