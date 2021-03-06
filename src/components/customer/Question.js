import React from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Customer from "./Customer";
import "./notice.css";
import QuestionList from "./QuestionList";

function Question({ children }) {
  return (
    <React.Fragment>
      <section className="visitTitle">
        <div className="inner-box">
          <h1>고객센터</h1>
          <h2>— 무엇이든 물어보세요</h2>
        </div>
      </section>
      <section className="question-container">
        <ul class="cont-navi">
          <li>
            <a href="#none" class="nav-home">
              HOME
            </a>
          </li>
          <li>
            <a href="#none" class="nav-sub">
              고객센터
            </a>
          </li>
          <li>
            <span class="nav-sub">문의하기</span>
          </li>
        </ul>
        <Customer />
        <article className="question-table">
          <QuestionList children={children} />
          <div className="write-question-btn">
            <Link to="/writing">
              <button>작성하기</button>
            </Link>
          </div>
        </article>

        <section className="pagination">
          <Pagination aria-label="Page navigation" size="sm">
            <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" previous />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" last />
            </PaginationItem>
          </Pagination>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Question;
