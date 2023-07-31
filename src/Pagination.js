/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleDoubleRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function Pagination(props) {
  return (
    <>
      <div className="pagination-main">
        <div className="pagination-container">
          <ul className="pagination">
            <li
              className={
                props.paginatorCopy.currentPage === 1
                  ? "disabled page-item"
                  : "page-item"
              }
              onClick={() => {
                if (props.paginatorCopy.currentPage !== 1) {
                  props.setPaginatorCopy({ currentPage: 1 });
                }
              }}
            >
              <FontAwesomeIcon icon={faAngleDoubleLeft} className="page-link" />
            </li>
            <li
              className={
                props.paginatorCopy.currentPage === 1
                  ? "disabled page-item"
                  : "page-item"
              }
              onClick={() => {
                if (props.paginatorCopy.currentPage !== 1) {
                  props.setPaginatorCopy({
                    currentPage: props.paginatorCopy.currentPage - 1,
                  });
                }
              }}
            >
              <FontAwesomeIcon icon={faAngleLeft} className="page-link" />
            </li>
            {props.paginatorCopy?.pages?.map((page, index) => {
              return (
                <li
                  className={
                    props.paginatorCopy.currentPage === page
                      ? "active page-item"
                      : "page-item"
                  }
                  key={index}
                >
                  <a
                    className="page-link"
                    onClick={() =>
                      props.setPaginatorCopy({ currentPage: page })
                    }
                  >
                    {page}
                  </a>
                </li>
              );
            })}
            <li
              className={
                props.paginatorCopy.currentPage ===
                props.paginatorCopy.total_pages
                  ? "page-item disabled"
                  : "page-item"
              }
              onClick={() => {
                if (
                  props.paginatorCopy.currentPage !==
                  props.paginatorCopy.total_pages
                ) {
                  props.setPaginatorCopy({
                    currentPage: props.paginatorCopy.currentPage + 1,
                  });
                }
              }}
            >
              <FontAwesomeIcon icon={faAngleRight} className="page-link" />
            </li>
            <li
              className={
                props.paginatorCopy.currentPage ===
                props.paginatorCopy.total_pages
                  ? "page-item disabled"
                  : "page-item"
              }
              onClick={() => {
                if (
                  props.paginatorCopy.currentPage !==
                  props.paginatorCopy.total_pages
                ) {
                  props.setPaginatorCopy({
                    currentPage: props.paginatorCopy.total_pages,
                  });
                }
              }}
            >
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className={
                  props.paginatorCopy.currentPage ===
                  props.paginatorCopy.total_pages
                    ? "disabled"
                    : "page-link"
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Pagination;
