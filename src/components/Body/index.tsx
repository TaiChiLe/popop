import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Image } from 'antd';
import React, { useState } from 'react';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Checkbox } from 'antd';
import type { GetProp } from 'antd';

const onChangeCheckbox: GetProp<typeof Checkbox.Group, 'onChange'> = (
  checkedValues
) => {
  console.log('checked = ', checkedValues);
};

const plainOptions = ['Apple', 'Pear', 'Orange'];

interface IconSliderProps {
  max: number;
  min: number;
}

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
};

export default function Body(props: IconSliderProps) {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const [valueRadio, setValueRadio] = useState(0);

  const onChange = (e: RadioChangeEvent) => {
    setValueRadio(e.target.value);
  };

  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';

  return (
    <div className="flex flex-wrap items-center justify-center mt-4 gap-4">
      <Card style={{ width: 300 }}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Should I buy a new car?</span>
          <div className="flex items-center mt-1 text-gray-500 text-sm">
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="ml-2">John Doe</span>
          </div>
        </div>
        <div align="center">
          <Image
            src="https://static.independent.co.uk/2025/02/18/10/40/Kia-EV6.png"
            className="mt-3 max-h-40"
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-gray-500">Votes: 150</span>
          <span className="text-gray-500">Comments: 20</span>
        </div>
        <div className="flex justify-between mt-3 bg-gray-100 rounded-4xl">
          <span className="text-green-500 font-semibold bg-green-200 p-4 rounded-4xl">
            Yes
          </span>
          <span className="text-red-500 font-semibold bg-red-200 p-4 rounded-4xl">
            No
          </span>
        </div>
      </Card>
      <Card style={{ width: 300 }}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            What do you think of the Dyson?
          </span>
          <div className="flex items-center mt-1 text-gray-500 text-sm">
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="ml-2">Katie bond</span>
          </div>
        </div>
        <div align="center">
          <Image
            src="https://cdn.mall.adeptmind.ai/https%3A%2F%2Fmultimedia.bbycastatic.ca%2Fmultimedia%2Fproducts%2F500x500%2F163%2F16310%2F16310766_1.jpg_large.webp"
            className="mt-3 max-h-40"
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-gray-500">Votes: 120</span>
          <span className="text-gray-500">Comments: 14</span>
        </div>

        <div className="icon-wrapper flex flex-row">
          <FrownOutlined className={preColorCls} />
          <Slider
            className="w-80"
            {...props}
            onChange={setValue}
            value={value || 50}
          />
          <SmileOutlined className={nextColorCls} />
        </div>
      </Card>
      <Card style={{ width: 300 }}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            What's your favourite color?
          </span>
          <div className="flex items-center mt-1 text-gray-500 text-sm">
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="ml-2">James bond</span>
          </div>
        </div>
        <div align="center">
          <Image
            src="https://cdn.britannica.com/62/234462-050-6CDEB78F/color-wheels-RYB-RGB.jpg"
            className="mt-3 max-h-40 w-100"
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-gray-500">Votes: 20</span>
          <span className="text-gray-500">Comments: 2</span>
        </div>

        <div className="icon-wrapper flex flex-row mt-4">
          <Radio.Group
            style={style}
            onChange={onChange}
            value={valueRadio}
            options={[
              { value: 1, label: 'Red' },
              { value: 2, label: 'Green' },
              { value: 3, label: 'Blue' },
            ]}
          />
        </div>
      </Card>
      <Card style={{ width: 300 }}>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">
            What's some of your favourite fruits?
          </span>
          <div className="flex items-center mt-1 text-gray-500 text-sm">
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="ml-2">Jane Doe</span>
          </div>
        </div>
        <div align="center">
          <Image
            src="https://freshsensations.com.au/cdn/shop/products/FruitBox.png?v=1643769480"
            className="mt-3 max-h-40 w-100"
          />
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-gray-500">Votes: 90</span>
          <span className="text-gray-500">Comments: 24</span>
        </div>

        <div className="icon-wrapper flex flex-row mt-4">
          <Checkbox.Group options={plainOptions} onChange={onChangeCheckbox} />
        </div>
      </Card>
    </div>
  );
}
