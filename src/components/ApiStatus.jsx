import { useState } from "react"

const ApiStatus = () => {
  const [showStatus, setShowStatus] = useState(false)

  if (!showStatus) {
    return (
      <button
        onClick={() => setShowStatus(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-75 hover:opacity-100 transition-opacity z-40"
        title="Check API Status"
      >
        API Status
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800">API Status</h3>
        <button
          onClick={() => setShowStatus(false)}
          className="text-gray-500 hover:text-gray-700"
          title="Close"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">shrtco.de</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">🟢</span>
            <span className="text-sm font-medium text-green-500">
              Available
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">TinyURL</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">🟢</span>
            <span className="text-sm font-medium text-green-500">
              Available
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Auto-fallback enabled. If one service fails, another will be used
          automatically.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Status updates when you try to shorten a URL.
        </p>
      </div>
    </div>
  )
}

export default ApiStatus
