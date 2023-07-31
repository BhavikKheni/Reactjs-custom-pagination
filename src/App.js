import React, { useEffect, useState } from "react";
import { getPager } from "./util";
import Pagination from "./Pagination";
import User from "./Users";
import "./style.scss";
import "./App.css";

const PAGE_SIZE = 6;
const CURRENT_PAGE = 1;

function App() {
  const [post, setPost] = useState([]);
  const [paginatorCopy, setPaginatorCopy] = useState({
    currentPage: CURRENT_PAGE,
    pageSize: PAGE_SIZE,
    pages: null,
    totalElements: null,
  });

  useEffect(() => {
    async function getPosts() {
      await fetch(
        `https://reqres.in/api/users?page=${paginatorCopy.currentPage}&per_page?=${PAGE_SIZE}`
      )
        .then((res) => res.json())
        .then((response) => {
          setPost(response);
          const page = getPager(
            response.total,
            paginatorCopy.currentPage,
            PAGE_SIZE
          );

          setPaginatorCopy({
            currentPage: page.currentPage,
            pageSize: PAGE_SIZE,
            pages: page.pages,
            totalElements: page.totalItems,
            total_pages: response.total_pages,
          });
        });
    }
    getPosts();
  }, [paginatorCopy.currentPage]);

  const setPropsCall = (data) => {
    setPaginatorCopy({
      currentPage: data.currentPage,
    });
  };
  
  return (
    <>
      <User users={post.data} />
      <Pagination
        paginatorCopy={paginatorCopy}
        setPaginatorCopy={(data) => setPropsCall(data)}
      />
    </>
  );
}

export default App;
