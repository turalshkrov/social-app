import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Col, Form, Input, Row, Statistic, Typography } from "antd";

import { Button, Container, Logo } from "@/components";

const { Countdown } = Statistic;

export const EmailVerification = () => {
    const [form] = useForm();
    const { getFieldsValue } = form;

    const [isCountDownFinished, setIsCountDownFinished] = useState(false);
    const [deadline, setDeadline] = useState(Date.now() + 1000 * 60);

    const onFinish = () => {
        setIsCountDownFinished(true);
    };

    const handleResentCode = () => {
        setDeadline(Date.now() + 1000 * 60);
        setIsCountDownFinished(false);
    };

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
                            Enter verification code
                        </Typography.Title>
                        <Typography.Text className="text-base">
                            Code sent to your email address.
                        </Typography.Text>
                    </Col>
                    <Form form={form} className="mt-10 text-center">
                        <Form.Item name="otp-code">
                            <Input.OTP length={4} />
                        </Form.Item>
                        <Col className="justify-center flex items-center mb-8">
                            <Button
                                type="link"
                                className="!p-0"
                                disabled={!isCountDownFinished}
                                onClick={handleResentCode}
                            >
                                Resend
                            </Button>
                            <Typography.Text className="text-base ml-1">
                                in
                            </Typography.Text>
                            <Countdown
                                value={deadline}
                                format="m:ss"
                                className="font-bold !text-sm ml-1"
                                onFinish={onFinish}
                            />
                        </Col>
                        <Button
                            htmlType="submit"
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Verify
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
