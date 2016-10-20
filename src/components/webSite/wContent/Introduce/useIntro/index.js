import React from 'react';
import './index.css';


const UseIntro = ()=> {
  return (
    <div className="use-intro-wrapper word-wrapper">
      <strong>1.系统</strong>
      <p>
        <b>注册账户:</b>
        学生账户通过邮箱注册。注册信息包括：邮箱地址、密码。点击注册后，你将收到一封邮件，点击链接激活账号。登录后，填写个人信息：学号、姓名、院系、专业、班级、QQ或微信（不是必填项）、邮箱、手机号、身份：毕业生、在校生选择一个填。
      </p>
      <p>
        <b>登录:</b>
        学生通过注册邮箱和密码登录。
      </p>
      <strong>2.学生服务系统</strong>
      <strong>（1）在校生</strong>
      <p>
        主要包括以下内容：
      </p>
      <p>
        <b>个人中心：</b>可修改个人信息、密码，更改在校生、毕业生身份。
      </p>
      <p>
        <b>查询：</b>查看学校全校、各个学院、各个专业、个人的最新就业情况。内容包括：
      </p>
      <p>
        学院、专业、班级、学号、QQ或微信、就业公司（读研学校）、就业岗位（专业）、岗位职能（方向）、建议、招聘信息。
      </p>
      <p>
        <strong>（2）毕业生</strong>
      </p>
      <p>
        主要包括以下内容：
      </p>
      <p>
        <b>个人中心:</b>在线填写、更改自己的就业信息。可修改个人信息、密码、更改毕业生身份。
      </p>
      <p>
        <b>查询:</b>查看学校全校、各个学院、各个专业、个人的最新就业情况。
      </p>
    </div>
  )
};


export default UseIntro;
