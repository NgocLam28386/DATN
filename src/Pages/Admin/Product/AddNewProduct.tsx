import { DesktopOutlined, FileOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons';
import type { GetProps, MenuProps } from 'antd';
import {
  Avatar, Breadcrumb, Button,
  Cascader, Dropdown, Form, Input, InputNumber, Layout, Mentions, Menu,
  Select, Space, theme, TreeSelect
} from 'antd';
import React, { useState } from 'react';

import type { FormProps } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];

type SearchProps = GetProps<typeof Input.Search>;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const { Search } = Input;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const siderbar: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Category', '2', <DesktopOutlined />),
  getItem('Product', '3', <FileOutlined />),
];

function AddNewProduct() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [componentVariant, setComponentVariant] = useState<FormProps['variant']>('filled');

  const onFormVariantChange = ({ variant }: { variant: FormProps['variant'] }) => {
    setComponentVariant(variant);
  };
  return (
    <>
      <Layout>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={siderbar} />
          </Sider>
          <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', height: '70px', background: colorBgContainer }}>
              <div className="demo-logo" />
              <Search placeholder="input search text" onSearch={onSearch} style={{ width: 300 }} className='ml-auto' enterButton />
              <Dropdown menu={{ items }} className='ml-4'>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <Avatar className='w-12' src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  </Space>
                </a>
              </Dropdown>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Form
                  {...formItemLayout}
                  onValuesChange={onFormVariantChange}
                  variant={componentVariant}
                  style={{ maxWidth: 600 }}
                  className='place-content-center'
                >
                  <Form.Item label="Input" name="Name" rules={[{ required: true, message: 'Please input!' }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="InputNumber"
                    name="InputNumber"
                    rules={[{ required: true, message: 'Please input!' }]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>

                  <Form.Item
                    label="TextArea"
                    name="TextArea"
                    rules={[{ required: true, message: 'Please input!' }]}
                  >
                    <Input.TextArea />
                  </Form.Item>

                  <Form.Item
                    label="Mentions"
                    name="Mentions"
                    rules={[{ required: true, message: 'Please input!' }]}
                  >
                    <Mentions />
                  </Form.Item>

                  <Form.Item
                    label="Select"
                    name="Select"
                    rules={[{ required: true, message: 'Please input!' }]}
                  >
                    <Select />
                  </Form.Item>

                  <Form.Item
                    label="Cascader"
                    name="Cascader"
                    rules={[{ required: true, message: 'Please input!' }]}
                  >
                    <Cascader />
                  </Form.Item>

                  <Form.Item
                    label="TreeSelect"
                    name="TreeSelect"
                    rules={[{ required: true, message: 'Please input!' }]}
                  >
                    <TreeSelect />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default AddNewProduct
