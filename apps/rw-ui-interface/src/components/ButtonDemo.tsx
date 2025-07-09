import React, { useState } from 'react'
// 导入真正的 Button 组件
import { Button } from '@rw/ui'

const ButtonDemo: React.FC = () => {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  return (
    <div className="space-y-8">
      <div className="demo-section">
        <h2 className="demo-title">Button 组件完整测试</h2>
        <p className="demo-description">
          测试 Button 组件的各种变体、尺寸和状态
        </p>

        {/* 基本用法 */}
        <div className="mb-6">
          <h3 className="demo-subtitle">基本用法</h3>
          <div className="flex gap-4 flex-wrap">
            <Button onClick={handleClick}>
              默认按钮 (点击次数: {clickCount})
            </Button>
            <Button type="secondary">
              次要按钮
            </Button>
            <Button type="outline">
              轮廓按钮
            </Button>
          </div>
        </div>

        {/* 不同尺寸 */}
        <div className="mb-6">
          <h3 className="demo-subtitle">不同尺寸</h3>
          <div className="flex gap-4 items-center flex-wrap">
            <Button size="small">
              小按钮
            </Button>
            <Button size="medium">
              中等按钮
            </Button>
            <Button size="large">
              大按钮
            </Button>
          </div>
        </div>

        {/* 禁用状态 */}
        <div className="mb-6">
          <h3 className="demo-subtitle">禁用状态</h3>
          <div className="flex gap-4 flex-wrap">
            <Button disabled>
              禁用的主按钮
            </Button>
            <Button type="secondary" disabled>
              禁用的次要按钮
            </Button>
            <Button type="outline" disabled>
              禁用的轮廓按钮
            </Button>
          </div>
        </div>

        {/* 组合示例 */}
        <div className="mb-6">
          <h3 className="demo-subtitle">组合示例</h3>
          <div className="demo-grid">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">表单操作</h4>
              <div className="flex gap-2">
                <Button type="primary">
                  提交
                </Button>
                <Button type="outline">
                  取消
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">删除确认</h4>
              <div className="flex gap-2">
                <Button 
                  type="primary" 
                  size="small"
                  className="bg-red-600 hover:bg-red-700 focus:ring-red-500"
                >
                  删除
                </Button>
                <Button type="outline" size="small">
                  取消
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">导航按钮</h4>
              <div className="flex gap-2">
                <Button type="secondary" size="large">
                  返回
                </Button>
                <Button type="primary" size="large">
                  下一步
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 测试计数器 */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">交互测试</h4>
          <p className="text-sm text-gray-600 mb-3">
            点击按钮测试交互功能，当前点击次数: <span className="font-bold">{clickCount}</span>
          </p>
          <div className="flex gap-2">
            <Button onClick={handleClick}>
              点击我 +1
            </Button>
            <Button type="outline" onClick={() => setClickCount(0)}>
              重置计数
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonDemo