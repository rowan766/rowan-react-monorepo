import React, { useState } from 'react'
import { 
  FormInput, 
  FormTextarea, 
  FormToggle, 
  FormSelect, 
  FormTags,
  type SelectOption 
} from '@rowan287630/ui'

export const FormTest: React.FC = () => {
  // 测试状态
  const [formData, setFormData] = useState({
    agentName: '',
    description: '',
    authorBio: '',
    autoAccept: false,
    classification: '',
    agentAddress: '',
    isFree: true,
    tags: [] as string[]
  })

  // 模拟错误状态
  const [showErrors, setShowErrors] = useState(false)

  // 下拉选项
  const classificationOptions: SelectOption[] = [
    { value: '', label: 'Select Agent classification', disabled: true },
    { value: 'ai-assistant', label: 'AI Assistant' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'automation', label: 'Automation' },
    { value: 'customer-service', label: 'Customer Service' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('表单数据:', formData)
    setShowErrors(true)
    
    // 简单验证
    if (!formData.agentName || !formData.classification) {
      alert('请填写必填字段')
      return
    }
    
    alert('表单提交成功！请查看控制台输出')
  }

  const resetForm = () => {
    setFormData({
      agentName: '',
      description: '',
      authorBio: '',
      autoAccept: false,
      classification: '',
      agentAddress: '',
      isFree: true,
      tags: []
    })
    setShowErrors(false)
  }

  const handleViewAPIExample = () => {
    alert('View API Call Example 功能演示')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* 主表单卡片 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* 蓝色头部 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
            <h1 className="text-2xl font-bold text-white">Agent 配置</h1>
            <p className="text-blue-100 mt-1">配置您的 AI Agent 信息和功能设置</p>
          </div>
          
          {/* 表单内容 */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Agent Name */}
              <div>
                <FormInput
                  label="Agent Name"
                  placeholder="Enter Agent name"
                  value={formData.agentName}
                  onChange={(e) => setFormData(prev => ({ ...prev, agentName: e.target.value }))}
                  helpText="输入您的 Agent 名称"
                  required
                  error={showErrors && !formData.agentName ? 'Agent 名称不能为空' : undefined}
                />
              </div>

              {/* Tags */}
              <div>
                <FormTags
                  label="Tags"
                  placeholder="Enter tags and press Enter to add, e.g.: data analysis, automation, AI assistant"
                  value={formData.tags}
                  onChange={(tags) => setFormData(prev => ({ ...prev, tags }))}
                  helpText="添加相关标签，按 Enter 键确认"
                  maxTags={10}
                  allowDuplicates={false}
                />
              </div>

              {/* Auto Accept Jobs */}
              <div>
                <FormToggle
                  label="Auto Accept Jobs"
                  description="Auto accept jobs"
                  checked={formData.autoAccept}
                  onChange={(e) => setFormData(prev => ({ ...prev, autoAccept: e.target.checked }))}
                  helpText="启用后将自动接受匹配的任务"
                />
              </div>

              {/* Agent Classification */}
              <div>
                <FormSelect
                  label="Agent Classification"
                  placeholder="Select Agent classification"
                  options={classificationOptions}
                  value={formData.classification}
                  onChange={(e) => setFormData(prev => ({ ...prev, classification: e.target.value }))}
                  helpText="选择 Agent 的分类"
                  required
                  error={showErrors && !formData.classification ? '请选择 Agent 分类' : undefined}
                />
              </div>

              {/* Agent Address */}
              <div className="relative">
                <FormInput
                  label="Agent Address"
                  placeholder="Enter Agent address (e.g., https://api.example.com)"
                  value={formData.agentAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, agentAddress: e.target.value }))}
                  helpText="输入 Agent 的 API 地址"
                  type="url"
                />
                <div className="absolute right-3 top-9">
                  <button
                    type="button"
                    onClick={handleViewAPIExample}
                    className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    View API Call Example
                  </button>
                </div>
              </div>

              {/* Brief Description */}
              <div>
                <FormTextarea
                  label="Brief Description"
                  placeholder="Briefly describe the functionality of this Agent"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  helpText="简要描述此 Agent 的功能"
                  rows={4}
                />
              </div>

              {/* Author Bio */}
              <div>
                <FormTextarea
                  label="Author Bio"
                  placeholder="Introduce your professional background, skills, or team experience, e.g.: 3 years of AI development experience, specializing in natural language processing..."
                  value={formData.authorBio}
                  onChange={(e) => setFormData(prev => ({ ...prev, authorBio: e.target.value }))}
                  helpText="介绍您的专业背景和技能"
                  rows={4}
                />
              </div>

              {/* Is Free */}
              <div>
                <FormToggle
                  label="Is Free"
                  description="This agent is available for free"
                  checked={formData.isFree}
                  onChange={(e) => setFormData(prev => ({ ...prev, isFree: e.target.checked }))}
                  helpText="设置此 Agent 是否免费使用"
                />
              </div>

              {/* 按钮组 */}
              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 font-medium"
                >
                  Reset
                </button>
                
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 flex items-center font-medium shadow-lg hover:shadow-xl"
                >
                  Deploy
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 调试信息卡片 */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            当前表单数据
          </h3>
          <pre className="text-sm text-gray-600 overflow-auto bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default FormTest