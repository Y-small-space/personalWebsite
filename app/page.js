import sty from './page.module.css'
import Image from 'next/image';
import defaultHead from '../public/default.jpg';
import Divider from '@mui/material/Divider';

export default function Home() {
  return (
    <div className={sty.main}>
      <div className={sty.content}>
        <Image
          className={sty.image}
          src={defaultHead}
          style={{
            width: '150px',
            height: '150px',
            marginTop: '20px',
            marginBottom: '20px'
          }} />
        <div className={sty.name}>郭靖远</div>
        <h3 style={{ color: 'gray', fontSize: '17px' }}>一个还没经历社会毒打的前端小白，目前可以接受长时间的实习。</h3>
        <strong
          className={sty.strong}
          style={{

          }}>个人简介</strong>
        <div className={sty.message}>
          <h2>年龄：21</h2>
          <h2>学校：西安建筑科技大学</h2>
          <h2>专业：数据科学与大数据技术</h2>
          <h2>年级：大三</h2>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '30px',
            marginTop: '40px'
          }}>个人能力</strong>
        <div className={sty.message}>
          <h3>熟悉Javascript、HTML、CSS基础知识、ES6新特性</h3>
          <h3>熟悉React的基本知识 以及会用React+AntiDesign开发基本的单页面网页</h3>
          <h3>熟悉React-Router和React-Redux的知识，可以使用React-Router和React-Redux，实现前端路由和状态管理。</h3>
          <h3>对TypeScript有基本了解，能够理解其语法和应用。</h3>
          <h3>了解nodejs以及express框架并且了解mongodb基本操作可以做到基本的后端开发</h3>
          <h3>了解docker、k8s的基本操作命令，可以部署前后端以及mongodb数据库且建立网络连接</h3>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '30px',
            marginTop: '40px'
          }}>项目经历</strong>
        <div className={sty.message}>
          <h3>Chatroom</h3>
          <h3 style={{ color: 'gray', fontSize: '17px' }}>一个可以即时聊天的网页</h3>
          <h3>独自设计、编写前后端代码、建立数据库与后端连接</h3>
          <h3>链接：https://github.com/Y-small-space/Chatroom</h3>
          <h3>技术栈：</h3>
          <h3>前端：react react-redux react-router Ant Design</h3>
          <h3>后端：nodejs express websocket mongodb</h3>
          <h3>内容：</h3>
          <h3>实现了注册、登录功能，并且使用了JWT做登陆校验</h3>
          <h3>使用WebSocket实现用户间实时通信功能</h3>
          <h3>成功使用docker、k8s在本地部署前端、后端以及数据库</h3>
          <h3>总结：</h3>
          <h3>
            Chatroom这个项目，是我在了解React之后建立，并在不断完善知识的过程中将所学知识成功应用于实际项目实践。
            这期间，我深入学习了Node.js和Express框架，同时了解了关于数据库的基础知识。
            这个项目不仅仅是对我的前端开发技能的锻炼，还让我了解了后端开发的知识。
            通过处理实际项目中遇到的挑战，我积累了解决问题的经验，尤其是在构建聊天应用时，学到了有关实时通信的重要知识。
            Chatroom项目巩固了我对React及其相关技术栈的应用，为未来的项目打下了坚实的基础。
            这个经验不仅在技术上丰富了我的知识，同时也培养了我独立解决问题的能力。
            我期待着将这些经验应用到未来的项目中，为用户创造更出色的互联网体验。
          </h3>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '30px',
            marginTop: '40px'
          }}>联系方式</strong>
        <div className={sty.message}>
          <h3>电话：17391669464</h3>
          <h3>email：jy.small.space@gmail.com</h3>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '30px',
            marginTop: '40px'
          }}>总结</strong>
        <div className={sty.message}>
          <h3>
            在追求前端编程技术和网页设计能力的同时，我对构建全栈应用充满热情，致力于拓展技术栈，将前端与后端无缝整合。通过不断学习后端相关知识，我期望能够打破前后端之间的界限，提供更完整、高效的用户体验。同时，我注重团队协作与沟通，相信协同工作是实现复杂项目目标的关键。在未来，我追求不断挑战自己，将前端和后端融会贯通，成为一名全栈工程师，为用户创造更出色的互联网体验。
          </h3>
        </div>
      </div>
    </div >
  );
}
