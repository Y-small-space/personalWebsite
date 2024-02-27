import style from "./page.module.css";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import headImage from '../public/avatar.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={style.home}>
      <Card
        className={style.background}
        sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: 'center',
          width: 300,
          height: 500,
          marginLeft: 20,
          position: "fixed",
          top: 150,
        }}
      >
        <Image
          src={headImage}
          style={{
            width: '100px',
            height: '100px',
            marginTop: '30px',
            marginBottom: '20px'
          }}
        />

        <Typography
          align="left"
          variant="h4"
          sx={{
            padding: '5px'
          }}
        >
          郭靖远
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            padding: '5px'
          }}
        >
          年龄:21
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            padding: '5px'
          }}
        >
          学校:西安建筑科技大学
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            padding: '5px'
          }}
        >
          专业:数据科学与大数据专业
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            padding: '5px'
          }}
        >
          年级:大三
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            padding: '5px'
          }}
        >
          电话:17391669464
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            padding: '5px'
          }}
        >
          email:jy.small.space@Gmail.com
        </Typography>
      </Card>
      <div className={style.side}>
        <Card
          className={style.background}
          sx={{
            margin: '40px 110px',
            marginBottom: '0px',
            width: '70%',
          }}>
          <Typography
            align="left"
            variant="h4"
            sx={{
              padding: '5px'
            }}
          >
            技能
          </Typography>
          <Typography
            align="left"
            variant="h5"
            sx={{
              padding: '5px'
            }}
          >
            熟悉
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{
              padding: '5px'
            }}
          >
            Javascript
            HTML
            CSS
            ES6
            React
          </Typography>
          <Typography
            align="left"
            variant="h5"
            sx={{
              padding: '5px'
            }}
          >
            了解
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{
              padding: '5px'
            }}
          >
            Typescript
            Webpack
            Node.js
          </Typography>
        </Card>
        <Card
          className={style.background}
          sx={{
            margin: '20px 110px',
            width: '70%',
          }}>
          <Typography
            align="left"
            variant="h4"
            sx={{
              padding: '5px'
            }}
          >
            项目经历
          </Typography>
          <Typography
            align="left"
            variant="h5"
            sx={{
              padding: '5px'
            }}
          >
            ChatRoom
          </Typography>
          <Typography
            align="left"
            variant="h5"
            sx={{
              padding: '5px'
            }}
          >
            技术栈：
          </Typography>
          <Typography
            align="left"
            variant="h5"
            sx={{
              padding: '5px'
            }}
          >
            前端：
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{
              padding: '5px'
            }}
          >
            React React-redux React-router
          </Typography>
          <Typography
            align="left"
            variant="h5"
            sx={{
              padding: '5px'
            }}
          >
            后端：
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{
              padding: '5px'
            }}
          >
            nodejs express mongodb
          </Typography>
        </Card>
      </div>
    </div>
  );
}
