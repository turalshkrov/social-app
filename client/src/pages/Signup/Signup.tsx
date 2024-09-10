import {
    CheckOutlined,
    ExclamationCircleOutlined,
    LoadingOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";
import { toast } from "sonner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { Checkbox, Col, Form, Row, Tooltip, Typography } from "antd";

import { checkUsername, createUser } from "@/api";
import { Button, Container, Input, Logo } from "@/components";

export const Signup = () => {
    const {
        mutate: mutateCheckUsername,
        isPending: isPendingCheckUsername,
        isError: isErrorCheckUsername,
        isSuccess: isSuccessCheckUsername,
    } = useMutation({
        mutationFn: checkUsername,
        mutationKey: ["checkUsername"],
    });

    const { mutate: mutateCreateUser } = useMutation({
        mutationFn: createUser,
        mutationKey: ["createUser"],
    });

    const [form] = useForm();
    const { getFieldsValue, getFieldValue } = form;

    const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

    const handleSubmit = () => {
        if (!isPrivacyAccepted) {
            toast.warning("Please accept the terms to continue.");
        } else {
            const data = getFieldsValue();
            mutateCreateUser(data);
        }
    };

    const handleSearch = () => {
        const username = getFieldValue("username");
        if (username.length >= 3) {
            mutateCheckUsername({ username });
        }
    };

    return (
        <Container>
            <Row justify="center" className="p-4 items-center h-screen">
                <Col span={24} md={12} lg={9} xl={7} xxl={5} className="mb-20">
                    <Logo />
                    <Form form={form} className="mt-20">
                        <Form.Item name="name">
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    min: 3,
                                    max: 32,
                                    pattern: /^[a-zA-Z]+$/,
                                    message:
                                        "Username and must conatin only English letters",
                                },
                            ]}
                            validateStatus={isErrorCheckUsername ? "error" : ""}
                        >
                            <Input
                                placeholder="Username"
                                onChange={handleSearch}
                                suffix={
                                    isPendingCheckUsername ? (
                                        <LoadingOutlined />
                                    ) : isErrorCheckUsername ? (
                                        <Tooltip title="Username is already taken">
                                            <ExclamationCircleOutlined
                                                style={{ color: "red" }}
                                            />
                                        </Tooltip>
                                    ) : isSuccessCheckUsername ? (
                                        <Tooltip title="OK">
                                            <CheckOutlined
                                                style={{ color: "green" }}
                                            />
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title="Check username">
                                            <QuestionCircleOutlined />
                                        </Tooltip>
                                    )
                                }
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    pattern:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Email is not valid",
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    max: 32,
                                    min: 8,
                                    message:
                                        "Password must include upper, lower, number, and symbol.",
                                },
                            ]}
                        >
                            <Input
                                inputType="password"
                                placeholder="Password"
                                autoComplete="new-password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox
                                checked={isPrivacyAccepted}
                                onChange={() =>
                                    setIsPrivacyAccepted(!isPrivacyAccepted)
                                }
                            >
                                I agree to
                                <Link to="/terms" className="mx-1">
                                    the Terms
                                </Link>
                                and
                                <Link to="/privacy" className="mx-1">
                                    Privacy Policy.
                                </Link>
                            </Checkbox>
                        </Form.Item>
                        <Button
                            htmlType="submit"
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Continue
                        </Button>
                        <Col className="text-center mt-4">
                            <Typography.Text className="text-base">
                                Have an account?
                                <Link to="/login">
                                    <Button
                                        type="link"
                                        className="p-0 font-bold ml-2"
                                    >
                                        Log in
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
