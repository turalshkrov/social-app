import { useForm } from "antd/es/form/Form";
import { Col, Form, Row, Typography } from "antd";

import { Input, Logo, Button } from "@/components";

export const ForgotPassword = () => {
    const [form] = useForm();
    const { getFieldsValue } = form;

    const handleSubmit = () => {
        console.log("getFieldsValue", getFieldsValue());
    };
    return (
        <Row justify="center" className="p-4 items-center h-screen">
            <Col span={24} md={12} lg={9} xl={7} xxl={5} className="mb-20">
                <Logo />
                <Col className="text-center mt-20">
                    <Typography.Title level={4} className="!mb-6">
                        Forgot password
                    </Typography.Title>
                    <Typography.Text className="text-base">
                        Enter your email to reset your password and access your
                        account.
                    </Typography.Text>
                </Col>
                <Form form={form} className="mt-10">
                    <Form.Item name="email">
                        <Input inputMode="email" placeholder="Email" />
                    </Form.Item>
                    <Button
                        htmlType="submit"
                        className="w-full"
                        onClick={handleSubmit}
                    >
                        Send reset link
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};
