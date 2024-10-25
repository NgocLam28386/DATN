import { DesktopOutlined, FileOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons';
import type { GetProps, MenuProps } from 'antd';
import {
  Avatar, Breadcrumb,
  Dropdown,
  Input,
  Layout,
  Menu,
  Space, theme
} from 'antd';
import React, { useState } from 'react';

import type { TableProps } from 'antd';
import { Table, Tag } from 'antd';


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Stock',
    dataIndex: 'countInStock',
    key: 'countInStock',
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [

];

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

function Product() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
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
                <Table<DataType> columns={columns} dataSource={data} />
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

export default Product
