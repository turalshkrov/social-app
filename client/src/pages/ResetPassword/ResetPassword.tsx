import { useForm } from "antd/es/form/Form";
import { Col, Form, Row, Typography } from "antd";

import { Input, Logo, Button, Container } from "@/components";

export const ResetPassword = () => {
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
                    <Col className="text-center mt-20">
                        <Typography.Title level={4} className="!mb-6">
                            Reset password
                        </Typography.Title>
                    </Col>
                    <Form form={form} className="mt-10">
                        <Form.Item
                            name="new-password"
                            rules={[
                                {
                                    required: true,
                                    max: 32,
                                    min: 8,
                                },
                            ]}
                        >
                            <Input
                                inputType="password"
                                placeholder="New Password"
                                autoComplete="new-password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirm-password"
                            rules={[
                                {
                                    required: true,
                                    max: 32,
                                    min: 8,
                                },
                            ]}
                        >
                            <Input
                                inputType="password"
                                placeholder="Confirm Password"
                                autoComplete="new-password"
                            />
                        </Form.Item>
                        <Button
                            htmlType="submit"
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Reset Password
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
