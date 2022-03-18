import React from "react";
import { Route, Switch } from "react-router-dom";

import OrderPage from "../../components/academy/OrderPage";
import Partnership from "../../components/academy/Partnership";
import Recruit from "../../components/academy/OrderPage";
import HrStore from "../../components/academy/HrStore";
import TeacherInfo from "../../components/academy/TeacherInfo";

// 고객센터
import Notice from "../../components/customer/Notice";
import Question from "../../components/customer/Question";
import Faq from "../../components/customer/Faq";
import Visit from "../../components/customer/visit";

// 공개과정
import Program from "../../components/program/Program";
import Curriculum from "../../components/program/Curriculum";
import TermsOfUse from "../../components/program/TermsOfUse";
import InfoInput from "../../components/program/InfoInput";
import Completed from "../../components/program/Completed";
import Confirm from "../../components/program/Confirm";

// 취업과정
import Job from "../job/Job";
import JobIntro from "../job/JobIntro";
import JobRecruit from "../job/JobRecruit";
import ProgramDetail from "../job/ProgramDetail";

//마이페이지
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Main from "../../components/main/Main";
import NotFound from "../../components/common/NotFound";

import Management from "../../components/mypage/Management";
import AccountWithdrawal from "../../components/mypage/ AccountWithdrawal";
import ChangePw from "../../components/mypage/ChangePw";
import MyClassList from "../mypage/MyClassList";
import RegiConfirm from "../mypage/RegiConfirm";

import Join from "../../components/member/Join";
import JoinForm from "../../components/member/JoinForm";
import JoinComplete from "../../components/member/JoinComplete";

import Sample1 from "../../components/sample/Sample1";
import WritingQuestion from "../customer/WritingQuestion";

export default function PCLayout({ isLogin }) {
  return (
    <>
      <Header isLogin={isLogin} />

      <Switch>
        {/* 메인 */}
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/sample" component={Sample1}></Route>
        {/* 회원가입 */}

        <Route exact path="/join" component={Join}></Route>
        <Route exact path="/join/form" component={JoinForm}></Route>
        <Route exact path="/join/complete" component={JoinComplete}></Route>

        {/* 공개과정 */}
        <Route exact path="/program" component={Program}></Route>
        <Route exact path="/curriculum" component={Curriculum}></Route>
        <Route exact path="/termsOfUse" component={TermsOfUse}></Route>
        <Route exact path="/infoInput" component={InfoInput}></Route>
        <Route exact path="/completed" component={Completed}></Route>
        <Route exact path="/confirm" component={Confirm}></Route>

        {/* 취업과정 */}
        <Route exact path="/job" component={Job}></Route>
        <Route exact path="/jobIntro" component={JobIntro}></Route>
        <Route exact path="/jobRecruit" component={JobRecruit}></Route>
        <Route exact path="/programDetail" component={ProgramDetail}></Route>

        {/* Ex콘텐츠 */}

        {/* 고객센터 */}
        <Route exact path="/notice" component={Notice}></Route>
        <Route exact path="/question" component={Question}></Route>
        <Route exact path="/writing" component={WritingQuestion}></Route>
        <Route exact path="/faq" component={Faq}></Route>
        <Route exact path="/visit" component={Visit}></Route>

        {/* 아카데미 */}

        <Route exact path="/OrderPage" component={OrderPage}></Route>
        <Route exact path="/Partnership" component={Partnership}></Route>
        <Route exact path="/Recruit" component={Recruit}></Route>
        <Route exact path="/hrstore" component={HrStore}></Route>
        <Route exact path="/teacherinfo" component={TeacherInfo}></Route>

        {/* 마이페이지 */}
        <Route exact path="/manage" component={Management}></Route>
        <Route
          exact
          path="/manage/withdrawal"
          component={AccountWithdrawal}
        ></Route>
        <Route exact path="/changepw" component={ChangePw}></Route>
        <Route exact path="/classlist" component={MyClassList}></Route>
        <Route exact path="/confirmclass" component={RegiConfirm}></Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}
