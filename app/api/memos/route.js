import dbConnect from "@libs/mongo";
import Memo from "@schema/memos";
import { NextResponse } from "next/server";

// nextjs는 서버를 api 안에 생성한다.

// 글쓰기
export async function POST(req){
    const { title, contents } =await req.json(); // 받은 json에서 title, contents 추출
    await dbConnect(); // db 접속

    // db에 쓴다. (key와 value가 일치하므로 하나만 써도 됨)
    await Memo.create({
        title,
        contents
    });
    // next의 NextResponse(node에서 response)를 이용하여 성공코드 넘김.
    return NextResponse.json({ message : "글을 입력했습니다."}, {status : 202});

}

// 글 읽기
export async function GET(){
    await dbConnect(); // req 할게 없으니 바로 db 접속
    const memos = await Memo.find();
    // memos 넘김
    return NextResponse.json({ memos });
}

