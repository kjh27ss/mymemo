"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Write = () => {
   const [title, setTitle] = useState("");
   const [contents, setContents] = useState("");
   const router = useRouter(); // router 연결
  return (
    <form className="mt-5">
       <h1 className="text-center mb-4 font-weight-bold">My Memo App</h1>
        <div className="mt-2 mb-3 d-flex justify-content-end">
           <a href="/" class="btn btn-outline-dark">목록</a>
        </div>
       <div className="form-group mb-5">
          <label for="title" className="font-weight-semibold mb-2">제목</label>
          <input type="text" className="form-control" id="title" value={title}/>
       </div>
       <div className="form-group mb-5">
          <label for="contents" className="font-weight-semibold mb-2">내용</label>
          <textarea className="form-control" id="contents" rows="5" value={contents} />
       </div>
       <div className="text-center">
          <button type="reset" className="btn btn-outline-danger mx-3 py-1 px-4">취소</button>
          <button type="submit" className="btn btn-outline-primary mx-3 py-1 px-4">수정</button>
       </div>
    </form>
  )
}

export default Write