import sty from './page.module.css'
import Image from 'next/image';
import defaultHead from '../public/mine.jpg';
import React from 'react';

export default function Home() {
  return (
    <div className={sty.main}>
      <div className={sty.content}>
        <div style={{ paddingTop: "0px" }}>
          <div style={{ fontSize: "20px" }}><b>郭靖远</b></div>
          <div style={{ fontSize: "13px" }}>13709251815</div>
          <div style={{ fontSize: "13px" }}>jy.small.space@gmail.com</div>
          <div style={{ fontSize: "13px" }}>https://github.com/Y-small-space</div>
        </div>
        <div style={{ position: "absolute", left: "75%", }}>
          <Image
            className={sty.image}
            src={defaultHead}
            alt='123'
            style={{
              width: '120px',
            }} />
        </div>
        <div style={{ marginTop: "10px", border: "1px solid black", width: "100%", fontSize: "20px", borderTop: "0", borderLeft: "0", borderRight: "0" }}>
          <b>个人能力</b>
        </div>
        <div className={sty.message}>
          <li>
            熟悉 JavaScript、HTML、CSS 基础知识，并掌握 ES6+ 新特性，能够编写现代、高效的前端代码。
          </li>
          <li>
            熟悉 React 框架，具备丰富的开发经验。能够结合 Ant Design 等 UI 组件库，快速搭建用户友好的前端界面，并熟练掌握 React-Router 和 React-Redux，确保应用具有良好的交互体验、复杂的前端路由管理和全局状态管理。
          </li>
          <li>
            具备 Next.js 框架的开发经验，能够利用其服务端渲染、静态站点生成等特性，提升应用的性能和 SEO 优化。
          </li>
          <li>
            熟悉 TypeScript 语法，能够与 React 结合进行项目开发，显著提高代码的可维护性、类型安全性和开发效率。
          </li>
          <li>
            具备 Node.js 和 Express 框架的开发经验，能够进行基础的后端开发工作，并熟悉 MongoDB 数据库的操作，为前端应用提供可靠的数据支持。
          </li>
          <li>
            熟悉 Webpack 的配置和优化，能够通过打包优化和性能调优。
          </li>
          <li>
            了解 Docker 的基本操作命令，了解前后端部署。
          </li>
        </div>
        <div style={{ marginTop: "10px", border: "1px solid black", width: "100%", fontSize: "20px", borderTop: "0", borderLeft: "0", borderRight: "0" }}>
          <b>实习经历</b>
        </div>
        <div className={sty.message}>
          <strong>腾讯云（西安）</strong><span style={{ marginLeft: "10px" }}>2024年5月 - 至今</span>
          <div>
            <strong>实习岗位：</strong><span>前端开发</span>
            <div>
              <strong>实习内容：</strong>
              <span>
                在腾讯云 TCS 专有云项目中担任前端开发实习生，主要使用 TypeScript 和 React 作为开发技术栈。在此期间，我参与了一个版本的更新迭代，负责开发和优化多个关键模块。我的职责包括需求分析、功能开发，以及修复上个迭代的 Bug 和安全漏洞。此外，我协助组长制定了组内自测和交叉测试的流程，提升了团队开发效率和代码质量。
              </span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10px", border: "1px solid black", width: "100%", fontSize: "20px", borderTop: "0", borderLeft: "0", borderRight: "0" }}>
          <b>项目经历</b>
        </div>
        <div className={sty.message}>
          <li>
            <b>Chatroom_webpage(全栈开发)</b>
            <div style={{ marginLeft: "20px" }}>
              <div><strong>前端链接：</strong>https://github.com/Y-small-space/Chatroom</div>
              <div><strong>后端链接：</strong>https://github.com/Y-small-space/Chatroom_backend</div>
              <div><strong>技术栈：</strong>Typescript react react-redux react-router Ant Design Nodejs Express MongoDB</div>
              <div><strong>内容：</strong>
                该项目采用 React 作为主要框架，结合 Ant Design 构建了简洁、直观的用户界面。核心功能包括用户注册、登录验证、好友管理（添加/删除）、实时显示好友在线状态，以及支持单人和多人聊天。用户可以在聊天中传输文本和文件，提供了丰富的互动体验。
              </div>
              <div><strong>优化：</strong>
                通过代码分割技术，Chatroom 将页面划分为多个模块，实现按需加载，显著减少了首屏加载时间和资源请求次数。引入协商缓存机制，优化资源请求策略，减少不必要的请求，提高了网站的性能与用户体验。此外，利用 React-Router 实现路由懒加载，进一步降低初始加载时间与资源占用。文件传输模块采用数据切片技术，提升了大文件传输的效率和可靠性。
              </div>
            </div>
          </li>
        </div>
        <div className={sty.message}>
          <li>
            <b>FlawerShop(前端开发)</b>
            <div style={{ marginLeft: "20px" }}>
              <div><strong>技术栈：</strong>Next.js, Ant Design</div>
              <div><strong>内容：</strong>
                FlawerShop 是一个为鲜花出口商打造的电商平台。在项目中，我主要负责数据上传、表单创建、表单修改等核心模块的封装，确保了数据的准确性和用户操作的流畅性。此外，我还优化了数据输入流程，减少了用户操作步骤，并且通过表单验证机制提升了表单提交的可靠性。
              </div>
            </div>
          </li>
        </div>
        <div style={{ marginTop: "10px", border: "1px solid black", width: "100%", fontSize: "20px", borderTop: "0", borderLeft: "0", borderRight: "0" }}>
          <b>教育经历</b>
        </div>
        <div className={sty.message}>
          <li>本科：</li>
          <span style={{ margin: "0 20px" }}>西安建筑科技大学</span> <span style={{ margin: "0 50px", marginLeft: "80px" }}>数据科学与大数据专业</span> <span style={{ margin: "0 50px" }}>2021-09-01 - 2025-07-01 </span>
        </div>
      </div >
    </div >
  );
}
