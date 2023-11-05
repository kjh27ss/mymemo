import dbConnect from "@libs/mongo";
import Memo from "@schema/memos";
import { NextResponse } from "next/server";

// 수정
export async function UPDATE(req,{params}){
    const id = params;
    const {title, contents} = req.body;
    // const res = await fetch(`http://localhost:3000/edit/${params.id}`)
    await dbConnect();
    await Memo.findByIdAndUpdate(id, {
        title : title,
        contents : contents
    });
    return NextResponse.json({ message : "수정 성공!"}, {status : 200});
}

// 글 삭제 ( 삭제 할 번호 : param )
export async function DELETE(req){
    const { id } = await req.json();
    console.log("아이디:" + id);
    await dbConnect();
    const rs = await Memo.findByAndDelete(id);
    return NextResponse.json({ rs , message : "삭제되었습니다."},{status : 200});
    
}