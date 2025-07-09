import React from 'react'
import SimpleImportTest from './components/SimpleImportTest'
import ButtonDemo from './components/ButtonDemo'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">RW UI 组件库测试</h1>
          <p className="mt-2 text-gray-600">测试和展示 RW UI 组件库中的各种组件</p>
        </div>
      </header>

      <main className="demo-container py-8">
        <SimpleImportTest />
        <ButtonDemo />
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500">RW UI 组件库测试应用</p>
        </div>
      </footer>
    </div>
  )
}

export default App