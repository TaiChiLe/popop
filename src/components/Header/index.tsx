import { Avatar, Button, Divider } from 'antd';

import { UserOutlined } from '@ant-design/icons';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-900">
              Popular Opinion - UI Example
            </div>
          </div>
        </div>
        <Divider></Divider>
      </div>
      <div>
        <div className="flex gap-4 justify-center pb-4">
          <Button color="danger" variant="solid" icon={'🔥'}>
            Hot
          </Button>
          <Button color="primary" variant="solid" icon={'✨'}>
            New
          </Button>
          <Button color="cyan" variant="solid" icon={'🗑️'}>
            Worst
          </Button>
        </div>
      </div>
    </header>
  );
}
