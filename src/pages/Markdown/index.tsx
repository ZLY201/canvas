import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import retypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import retypeRaw from 'rehype-raw';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ErrorBoundary from "component/ErrorBoundary";

import style from "./index.module.less";

import {
  NormalComponents,
  SpecialComponents
} from "react-markdown/src/ast-to-react";

import { debounce } from "utils/funcLimit";

import markdownGuide from "static/markdownGuide";

const component: Partial<NormalComponents & SpecialComponents> = {
  // @ts-ignore
  code({ inline = undefined, className = undefined, children = undefined, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div"
                         children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
};

class Markdown extends Component<any, any> {
  private readonly textarea: React.RefObject<HTMLTextAreaElement>;
  private readonly preview: React.RefObject<HTMLDivElement>;
  private readonly clonePreview: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      content: '',
    };
    this.textarea = React.createRef();
    this.preview = React.createRef();
    this.clonePreview = React.createRef();
  }

  componentDidMount() {
    const markdownContent = window.localStorage.getItem("markdownContent");
    const content = (markdownContent || markdownContent === "") ? markdownContent : markdownGuide;
    if (this.textarea?.current) {
      this.textarea.current.value = content;
      this.textareaScroll();
    }
    this.setState({ content });
  }

  componentWillUnmount() {
    window.localStorage.setItem("markdownContent", this.state.content);
  }

  save = (e: any) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      window.localStorage.setItem("markdownContent", this.state.content);
    }
  };

  changeContent = (e: any) => {
    this.setState({ content: e.target.value });
  };

  textareaScroll = () => {
    if (this.preview?.current && this.textarea?.current) {
      const heightRate = (this.textarea.current.scrollHeight - this.textarea.current.offsetHeight) /
        (this.preview.current.scrollHeight - this.preview.current.offsetHeight);
      this.preview.current.scrollTo({
        top: this.textarea.current.scrollTop / heightRate,
        behavior: 'smooth'
      });
    }
  };

  getMarkdownGuide = () => {
    const content = markdownGuide;
    if (this.textarea?.current) {
      this.textarea.current.value = content;
      this.textareaScroll();
    }
    this.setState({ content });
  };

  buttonClick = async (e: any, clickFunc: Function) => {
    const button = e.target as HTMLButtonElement;
    if (button) {
      button.disabled = true;
      const text = button.innerText;
      button.innerText = "running...";
      await clickFunc();
      button.disabled = false;
      button.innerText = text;
    } else {
      console.error("button not find");
    }
  };

  saveAsHTML = async (e: any) => {
    await this.buttonClick(e, async () => {
      if (this.preview?.current) {
        localStorage.setItem("markdownHTMLValue", this.preview.current.innerHTML);
        window.open(window.location.href.split('#')[0] + '#/saveAsHTML', "_blank");
      } else {
        alert("Sorry, your browser not support this function!");
      }
    });
  };

  getStyle = (element: HTMLElement, attr: any) => {
    return document.defaultView?.getComputedStyle(element, null)[attr] || "0px";
  };

  judgePreviewElement = (element: HTMLDivElement, pageHeight: number) => {
    const children = element.children;
    const length = children.length;
    let curHeight = 0;
    let marginBottom = 0;
    for (let i = 0; i < length; ++i) {
      const node = children[i] as HTMLElement;
      const marginTop = parseFloat(this.getStyle(node, "margin-top").split('px')[0]);
      const nodeHeight = node.offsetHeight + Math.max(marginTop, marginBottom);
      curHeight += nodeHeight;
      if (curHeight > pageHeight) {
        const extraHeight = Math.max(marginTop, 10);
        node.style.marginTop = `${nodeHeight - (curHeight - pageHeight) + extraHeight}px`;
        curHeight = node.offsetHeight + extraHeight;
      }
      marginBottom = parseFloat(this.getStyle(node, "margin-bottom").split('px')[0]);
    }
  };

  SaveAsPDF = async (e: any) => {
    await this.buttonClick(e, async () => {
      const preview = this.preview.current;
      if (preview) {
        const A4Width = 595.28;
        const A4Height = 841.89;
        const copyPreview = preview.cloneNode(true) as HTMLDivElement;
        copyPreview.style.width = `${A4Width - 20}px`;
        copyPreview.style.height = 'auto';
        copyPreview.style.padding = '0 10px';
        if (this.clonePreview.current) {
          this.clonePreview.current.appendChild(copyPreview);
        } else {
          console.error("clonePreview not find");
          return;
        }
        await new Promise<void>(resolve => {
          setTimeout(() => {
            resolve();
          }, 500);
        });
        this.judgePreviewElement(copyPreview.children[0] as HTMLDivElement, A4Height);
        await html2canvas(copyPreview, {
          useCORS: true,
          scale: window.devicePixelRatio,
        }).then((canvas) => {
          const contentWidth = canvas.width;
          const contentHeight = canvas.height;
          const pageHeight = contentWidth * A4Height / A4Width;
          const imgWidth = A4Width;
          const imgHeight = A4Width * contentHeight / contentWidth;
          const pageData = canvas.toDataURL("image/png", 1.0);
          const PDF = new JsPDF(undefined, 'pt', 'a4');
          let leftHeight = contentHeight;
          let position = 0;
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'png', 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= A4Height;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
          PDF.save('markdown.pdf');
          copyPreview.remove();
        });
      } else {
        console.error("preview not find");
      }
    });
  };

  render() {
    return (
      <div className={style.markdownContainer} onKeyDown={this.save}>
        <div className={style.markdownHeader}>
          Start your write here!
        </div>
        <div className={style.funcList}>
          <button onClick={this.getMarkdownGuide}>markdown guide</button>
          <button onClick={this.saveAsHTML}>save as html</button>
          <button onClick={this.SaveAsPDF}>save as pdf</button>
        </div>
        <div className={style.markdown}>
          <div className={style.inputContainer}>
            <textarea
              wrap={style.hard}
              className={style.textarea}
              onInput={this.changeContent}
              ref={this.textarea}
              onScroll={debounce(this.textareaScroll, 100)}
            />
          </div>
          <div className={style.previewContainer}>
            <div className={style.preview} ref={this.preview}>
              <ErrorBoundary>
                <ReactMarkdown
                  className={style.markdownResult}
                  components={component}
                  children={this.state.content}
                  remarkPlugins={[gfm, remarkMath]}
                  rehypePlugins={[retypeKatex, retypeRaw]}
                />
              </ErrorBoundary>
            </div>
          </div>
          <div className={`${style.previewContainer} ${style.clonePreview}`}
               ref={this.clonePreview} />
        </div>
      </div>
    );
  }
}

export default Markdown;
