import { Link } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { Col, Form, Row, Typography } from "antd";

import { Button, Container, Input, Logo, PasswordInput } from "@/components";

export const Login = () => {
    const [form] = useForm();
    const { getFieldsValue } = form;

    const handleSubmit = () => {
        console.log("getFieldsValue", getFieldsValue());
    };
    return (
        <Container>
            <Row justify="center" className="p-4 items-center h-screen">
                <Col span={24} md={12} lg={9} xl={7} xxl={5} className="mb-20">
                    <Logo />
                    <Form form={form} className="mt-20">
                        <Form.Item name="email">
                            <Input inputMode="email" placeholder="Email" />
                        </Form.Item>
                        <Form.Item name="password">
                            <PasswordInput placeholder="Password" />
                        </Form.Item>
                        <Col className="text-right mb-6">
                            <Link to="/forgot-password">
                                <Button type="link" className="p-0">
                                    Forgot Password?
                                </Button>
                            </Link>
                        </Col>
                        <Button
                            htmlType="submit"
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Log in
                        </Button>
                        <Col className="text-center mt-4">
                            <Typography.Text className="text-base">
                                Don't have an account?
                                <Link to="/signup">
                                    <Button
                                        type="link"
                                        className="p-0 font-bold ml-2"
                                    >
                                        Sign up
                                    </Button>
                                </Link>
                            </Typography.Text>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
