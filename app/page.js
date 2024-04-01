import sty from './page.module.css'
import Image from 'next/image';
import defaultHead from '../public/mine.jpg';

export default function Home() {
  return (
    <div className={sty.main}>
      <div className={sty.content}>
        <Image
          className={sty.image}
          src={defaultHead}
          style={{
            width: '88px',
            // marginTop: '10px',
            marginBottom: '10px'
          }} />
        <div className={sty.name}>郭靖远</div>
        <strong
          style={{
            fontSize: '28px',
            marginTop: '20px'
          }}
          className={sty.strong}
        >个人简介</strong>
        <div className={sty.message}>
          <h2><strong>年龄：</strong>21</h2>
          <h2><strong>学校：</strong>西安建筑科技大学</h2>
          <h2><strong>专业：</strong>数据科学与大数据技术</h2>
          <h2><strong>年级：</strong>大三</h2>
        </div>
        <div className={sty.message}>
          <h3>
            在追求前端编程技术和网页设计能力的同时，我对构建全栈应用充满热情，致力于拓展技术栈。同时，我注重团队协作与沟通，相信协同工作是实现复杂项目目标的关键。在未来，我追求不断挑战自己，将前端和后端融会贯通，成为一名全栈工程师，为用户创造更出色的互联网体验。
          </h3>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '28px',
            marginTop: '20px'
          }}>联系方式</strong>
        <div className={sty.message}>
          <h3><strong>电话：</strong>17391669464</h3>
          <h3><strong>Email：</strong>jy.small.space@gmail.com</h3>
          <h3><strong>Github：</strong>https://github.com/Y-small-space</h3>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '28px',
            marginTop: '20px'
          }}>个人能力</strong>
        <div className={sty.message}>
          <li>熟悉Javascript、HTML、CSS基础知识以及ES6新特性。</li>
          <li>熟悉React框架，具备基本的React开发能力，并能与Ant Design等UI组件库结合，快速搭建用户友好的前端界面</li>
          <li>掌握React-Router和React-Redux的知识，能够实现前端路由管理和状态管理，使得前端应用具有良好的交互体验和数据管理能力。</li>
          <li>熟悉TypeScript语法，能够与React结合起来进行项目开发，提高代码的可维护性和安全性。</li>
          <li>具备Node.js和Express框架的开发经验，了解MongoDB数据库的基本操作，能够进行基本的后端开发工作，为前端应用提供数据支持。</li>
          <li>熟悉Webpack的基本配置方法，能够进行打包优化和性能调优，提高前端项目的加载速度和运行效率。</li>
          <li>了解Docker的基本操作命令，具备部署前后端应用以及MongoDB数据库的能力，能够建立网络连接并进行部署管理。</li>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '28px',
            marginTop: '20px'
          }}>项目经历</strong>
        <div className={sty.message}>
          <strong style={{ fontSize: '27px' }}>Chatroom</strong>
          <h3 style={{ color: 'gray', fontSize: '17px' }}>一个可以即时聊天的网页</h3>
          <h3 style={{ color: 'gray', fontSize: '17px' }}>独自设计、编写前后端代码、建立数据库与后端连接</h3>
          <h3><strong>前端链接：</strong>https://github.com/Y-small-space/Chatroom</h3>
          <h3><strong>后端链接：</strong>https://github.com/Y-small-space/Chatroom_backend</h3>
          <h3><strong>技术栈：</strong></h3>
          <li>前端：Typescript react react-redux react-router Ant Design</li>
          <li>后端：nodejs express websocket mongodb</li>
          <h3><strong>内容：</strong></h3>
          <li>使用React、Ant Design构建页面，提供美观、响应式的用户界面，增强用户体验。</li>
          <li>利用React Router实现前端路由，使用React Redux管理前端应用状态。</li>
          <li>用户注册和登录功能，使用 JWT 进行身份验证。</li>
          <li>基于 WebSocket 实现用户间的实时聊天功能。</li>
          <li>利用 Express 框架搭建了基本的后台服务，实现了用户认证和聊天消息的存储与获取。</li>
          <li>使用mongodb存储用户以及聊天信息，实现数据的可持久化存储。</li>
          <li>使用 Docker 部署前端、后端以及 MongoDB 数据库，并建立了网络连接。</li>
          <h3><strong>优化手段：</strong></h3>
          <li>代码分割： 通过代码分割技术，Chatroom 将页面划分为多个模块，在需要时才加载相关代码，减少了首屏加载时间和资源请求次数。</li>
          <li>协商缓存： 后端使用协商缓存机制，与客户端协商资源的缓存策略，减少了不必要的资源请求，提高了网站性能和用户体验。</li>
          <li>路由懒加载： Chatroom 使用 React-Router 实现前端路由，并采用了路由懒加载技术，将页面按需加载，减少了初始加载时间和资源占用</li>
          <h3><strong>总结：</strong></h3>
          <h3>
            Chatroom这个项目，是我在了解React之后建立，并在不断完善知识的过程中将所学知识成功应用于实际项目实践。这期间，我深入学习了Node.js和Express框架，同时了解了关于数据库的基础知识。这个项目不仅仅是对我的前端开发技能的锻炼，还让我了解了后端开发的知识。通过处理实际项目中遇到的挑战，我积累了解决问题的经验，尤其是在构建聊天应用时，学到了有关实时通信的重要知识。Chatroom项目巩固了我对React及其相关技术栈的应用，为未来的项目打下了坚实的基础。这个经验不仅在技术上丰富了我的知识，同时也培养了我独立解决问题的能力。我期待着将这些经验应用到未来的项目中，为用户创造更出色的互联网体验。
          </h3>
        </div>
      </div>
    </div >
  );
}
