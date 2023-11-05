"use client"
import { FcAlarmClock } from 'react-icons/fc';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const getMemo = async () => {
  try{
    const res = await fetch("http://localhost:3000/api/memos/",{
      cache : "no-store"
    })
    if(!res.ok){
      throw new Error("다운로드 실패")
    }
    return res.json();
  }catch(error){
    console.log(error);
  }
}

const Home = async() => {
  // console.log(await getMemo());
  const { memos } = await getMemo();
  console.log(memos);

  const handleDelete = async(id) => {
    const y = window.confirm("정말 삭제하시겠습니까?");
    if(y){
      // 삭제 쿼리
      try{
        const res = await fetch(`http://localhost:3000/api/memos/${id}`, {
          method : 'DELETE',
          headers : {
            "Content-type" : "application/json"
         },
         body:JSON.stringify({id})
      });
      if(res){
        alert(res.message);
      }else{
        alert("에러 발생!!!!");
      }
      }catch(error){
        console.error(error);
      }
    }
  }
  
  return (
    <>
      <div className="col-12 my-5">
        <h1 className="text-center mb-4 font-weight-bold">My Memo App</h1>
        <div className="mt-2 mb-3 d-flex justify-content-end">
           <Link href="write" className="btn btn-outline-dark">글쓰기</Link>
        </div>
        <ul className="list-group">
          {
              memos.map((rs,index) => {
                const d = new Date(rs.date);
                const date = `${d.getFullYear()}.${d.getMonth()-1}.${d.getDate()}`;
                return(
                 <li key={index} className="list-group-item p-4">
                      <h3><FcAlarmClock/> {rs.title} <small>({date})</small></h3> 
                      <p>{rs.contents}</p>
                      <div className="d-flex justify-content-end mt-4">
                          <Link href={`update/${rs._id}`} className="btn btn-outline-dark">수정</Link>
                          <button className="btn btn-outline-dark ms-3" onClick={()=>handleDelete(rs._id)}>삭제</button>
                          {/* <Link href={`delete/${rs._id}`} className="btn btn-outline-dark">삭제</Link> */}
                      </div>
                </li>
              );
          })
        }
        </ul>
      </div>
    </>
  )
}

export default Home