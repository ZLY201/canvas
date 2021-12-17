import React from 'react';

class ErrorBoundary extends React.Component<any, any> {
  componentDidCatch(error: Error) {
    console.warn(error);
    alert('转义失败，请检查 markdown 语法错误，例如 html 标签错误！');
  }

  render() {
    return this.props.children || "";
  }
}

export default ErrorBoundary;
