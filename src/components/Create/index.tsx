import { useState } from 'react';
import { Button, Modal } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Select, Upload } from 'antd';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function Create() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center p-4 bg-blue-500 fixed bottom-0 w-full  ">
        <Button onClick={showModal}>Create +</Button>
        <Modal
          title="Create a new opinion"
          closable={{ 'aria-label': 'Custom Close Button' }}
          open={isModalOpen}
          okText="Submit"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Opinion">
              <Input required />
            </Form.Item>
            <Form.Item label="Question Type">
              <Select>
                <Select.Option value="yes-no">Yes or No (Binary)</Select.Option>
                <Select.Option value="Single-option">
                  Single Option
                </Select.Option>
                <Select.Option value="Multi-option">
                  Multiple Options
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    color: 'inherit',
                    cursor: 'inherit',
                    border: 0,
                    background: 'none',
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}
