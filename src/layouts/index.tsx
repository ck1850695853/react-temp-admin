import { useNavigate } from "react-router-dom";
import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex, Layout } from "antd";
import { ThemeSwitch } from "@/components/theme-switch";
import Content from "./content";
import Sider from "./sider";
import { useSettingsStore } from "@/stores/settings";

export default function MainLayout() {
  const navigate = useNavigate();

  const collapsed = useSettingsStore((state) => state.collapsed);
  const setCollapsed = useSettingsStore((state) => state.setCollapsed);

  return (
    <Layout hasSider className="w-screen overflow-hidden">
      <Sider />
      <Layout>
        <Layout.Header className="flex items-center justify-between dark:text-white sticky top-0 z-[999] border-b border-b-gray-200 dark:border-b-gray-700">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-inherit hover:text-inherit"
          />
          <Flex gap={16}>
            <ThemeSwitch />
            <div
              className="flex items-center justify-center gap-1 cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              <LogoutOutlined className="text-xl" /> 退出登录
            </div>
          </Flex>
        </Layout.Header>
        <Content />
      </Layout>
    </Layout>
  );
}
