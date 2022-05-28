import React from 'react'
import * as styles from './styles/Contact.module.scss'

import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';

export default function Contact() {
  const [form] = Form.useForm();

  return (
    <div className={styles.contact}>
      <Form
        form={form}
        layout="vertical"
      >
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item label="Your name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Your phone number">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Description">
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">GET IN TOUCH</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
