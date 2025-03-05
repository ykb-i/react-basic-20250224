import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { useCookies } from 'react-cookie';

// cookie:
// 클라이언트가 특정한 웹 서비스에 방문하여 사용 중 필요한 데이터를 클라이언트 브라우저에 저장하는 기술
// - 이름, 값, 만료일, 도메인, 경로 속성이 존재함

// document.cookie로 쿠키값을 지정할 수 있음
// 예) document.cookie = "cookieName=쿠키연습; path=/";

// 기본 document를 이용한 cookie 작업은 매우 불편함
// react에서는 react-cookie 패키지를 이용하여 조금 더 수월하게 cookie를 다룰 수 있음
// cookie 설정, 검색, 삭제를 간단한 함수만으로 작업할 수 있음

// ? 쿠키는 같은 부모경로여도 자식경로에 따라서 사용이 안된다.

// npm install react-cookie
export default function Cookie() {
    // document.cookie = "cookieName=쿠키연습; path=/";

    const [cookieName, setCookieName] = useState<string>('');
    const [cookieValue, setCookieValue] = useState<string>('');

    const onNameChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCookieName(value);
    }

    const onValueChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCookieValue(value);
    }

    // useCookies: 
    // react에서 cookie 객체, 변경함수, 제거함수를 배열로 반환하는 react-cookie의 훅 함수
    const [cookies, setCookie, removeCookie] = useCookies();

    const onAddClick = () => {
        // 쿠키를 추가 할땐 setCookie 함수를 사용할 수 있음
        // - setCookie(쿠키이름, 쿠키값, 옵션(선택사항));

        // 옵션(객체)
        // - path: 해당 쿠키가 적용될 경로
        // - expires: 만료 시간
        const now = new Date();
        const expires = new Date(now.setSeconds(now.getSeconds() + 10));
        setCookie(cookieName, cookieValue, {
            path: '/', 
            //expires
        });
    }

    const onGetCookie = () => {
        // cookies 객체에 브라우저가 가지고 있는 쿠키 정보가 담겨있음
        // console.log(cookies);
        // cookieName을 변수처럼 사용하는 방법
        console.log(cookies[cookieName]);
    }

    const onRemoveCookie = () => {
        // removeCookie 함수를 사용하여 쿠키 제거 가능
        // removeCookie(쿠키이름, 옵션[선택]);
        removeCookie(cookieName, {path:'/'});
    }
  return (
    <div>
        <input value={cookieName} onChange={onNameChange}/>
        <input value={cookieValue} onChange={onValueChange}/>
        <button onClick={onAddClick}>추가</button>
        <button onClick={onGetCookie}>확인</button>
        <button onClick={onRemoveCookie}>제거</button>
    </div>
  )
}
