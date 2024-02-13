// import React from 'react';
import { Space, Spin } from 'antd';

export default function Loader() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl mb-2">Loading... Please Wait</p>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    );
  }
