"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const Write = () => {
   const [title, setTitle] = useState("");
   const [contents, setContents] = useState("");
   const router = useRouter(); // router 연결

   const handleSubmit = async (e) => {
      e.preventDefault(); 
      // console.log(title, contents);
      try{
         const res = await fetch('http://localhost:3000/api/memos', {
            method : "POST",
            headers : {
               "Content-type" : "application/json"
            },
            body : JSON.stringify({ title, contents })
         });
         if(!res.ok){
            throw new Error("등록에 실패했습니다.");
         }
         router.refresh();
         router.push("/");
      }catch(error){
         console.log(error);
      }
   }

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
       <h1 className="text-center mb-4 font-weight-bold">My Memo App</h1>
        <div className="mt-2 mb-3 d-flex justify-content-end">
           <Link href="/" class="btn btn-outline-dark">목록</Link>
        </div>
       <div className="form-group mb-5">
          <label htmlFor="title" className="font-weight-semibold mb-2">제목</label>
          <input type="text" className="form-control" id="title" placeholder="제목을 입력" onChange={(e)=>setTitle(e.target.value)} value={title} />
       </div>
       <div className="form-group mb-5">
          <label htmlFor="contents" className="font-weight-semibold mb-2">내용</label>
          <textarea className="form-control" id="contents" rows="5" placeholder="내용을 입력" onChange={(e)=>setContents(e.target.value)} value={contents} />
       </div>
       <div className="text-center">
          <button type="reset" className="btn btn-outline-danger mx-3 py-1 px-4">취소</button>
          <button type="submit" className="btn btn-outline-primary mx-3 py-1 px-4">전송</button>
       </div>
    </form>
  )
}

export default Write