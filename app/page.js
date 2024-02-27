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
            marginTop: '80px',
            marginBottom: '20px'
          }} />
        <div className={sty.name}>郭靖远</div>
        <Divider

          style={{
            width: '100%',
          }} />
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
          <h3>熟悉：</h3>
          <h3>Javascript、HTML、CSS、ES6、React</h3>
          <h3>了解：</h3>
          <h3>Nodejs、Webpack、Typescript</h3>
        </div>
        <strong
          className={sty.strong}
          style={{
            fontSize: '30px',
            marginTop: '40px'
          }}>项目经历</strong>
        <div className={sty.message}>
          <h3>Chatroom</h3>
          <h3>一个可以即时聊天的网页</h3>
          <h3>链接：https://github.com/Y-small-space/Chatroom</h3>
          <h3>技术栈：</h3>
          <h3>前端：react react-redux react-router Ant Design</h3>
          <h3>后端：nodejs express websocket mongodb</h3>
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
          <h3>一个还没经历社会毒打的前端小白，目前可以接受长时间的实习。</h3>
        </div>
      </div>
    </div >
  );
}
