import { Progress } from 'antd';
import './Skills.css'


const Skills = () => {
   return <div> 
   <div className="Design">
  <h1>Html</h1>
    <Progress type="circle" percent={75} />
    <h1>Css</h1>
      <Progress percent={60} success={{ percent: 30 }} type="circle" />
    <h1>javaScript</h1>
    <Progress type="circle" percent={50} />
  </div>  
  <div className="Design1"> 
      <h1>React</h1>
    <Progress type="circle" percent={50} />
     <h1>React Native</h1>
     <Progress percent={60} success={{ percent: 30 }} type="circle" />
     </div>
   </div>
}

export default Skills;