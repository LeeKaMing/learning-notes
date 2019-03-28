

window.addEventListener('message', function callback(e) {
  const eventOrigin = e.origin || e.originalEvent.origin
  const data = e.data

  // 业务逻辑
})

window.open('...')

// 用于打开微信授权窗口，然后等待新页面 postMessage 消息回来
