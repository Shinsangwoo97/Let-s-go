function send_webview_data(type, data) {
  if (window.ReactNativeWebView !== undefined) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
  } else {
    console.log("[웹뷰 통신오류] 웹뷰가 동작하지 않습니다.");
  }
}

export default send_webview_data;
