import React from 'react'
// 直接导入 Button 组件
import { Button } from '@rw/ui'

const SimpleImportTest: React.FC = () => {
  const [clickCount, setClickCount] = React.useState(0)

  console.log('Button 组件:', Button)
  console.log('Button 组件类型:', typeof Button)

  return (
    <div className="demo-section">
      <h2 className="demo-title">导入测试</h2>
      
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">模块检查结果:</h3>
        {Button ? (
          <div>
            <p className="text-green-600">✅ 成功导入 Button 组件</p>
            <p className="text-sm text-gray-600">组件类型: {typeof Button}</p>
          </div>
        ) : (
          <div>
            <p className="text-red-600">❌ 未找到 Button 组件</p>
          </div>
        )}
      </div>

      {Button && (
        <div className="mb-6">
          <h3 className="demo-subtitle">Button 组件测试</h3>
          <div className="flex gap-4 flex-wrap">
            <Button onClick={() => setClickCount(prev => prev + 1)}>
              主按钮 (点击: {clickCount})
            </Button>
            <Button type="secondary">
              次要按钮
            </Button>
            <Button type="outline">
              轮廓按钮
            </Button>
            <Button disabled>
              禁用按钮
            </Button>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="demo-subtitle">不同尺寸测试</h3>
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

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">交互测试</h4>
        <p className="text-sm text-gray-600 mb-3">
          当前点击次数: <span className="font-bold">{clickCount}</span>
        </p>
        <div className="flex gap-2">
          <Button onClick={() => setClickCount(prev => prev + 1)}>
            点击我 +1
          </Button>
          <Button type="outline" onClick={() => setClickCount(0)}>
            重置计数
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SimpleImportTest