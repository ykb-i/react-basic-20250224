import React, { ChangeEvent, useState } from 'react'

// 브라우저 Storage
// - 변수등을 사용하여 프로그램에서 메모리로 데이터를 관리하는 것이 아니라
// 브라우저 저장 공간에서 관리하는 방법 (반영구적)
// - storage: 브라우저(쿨라이언트)에 데이터를 저장하고 관리
//            요청과는 무관한 특성을 가지고 있음
//            쿠키와 비교했을 때 저장할 수 있는 용량이 큼
//            데이터를 key-value 형태로 저장
//            사용자가 삭제하지 않는한 영구적으로 지원할 수도 있음
//   - local storage : 브라우저를 닫아도 영구적으로 유지됨
//   - session storage: 현재 세션이 유지(브라우저가 켜져잇는)되는 동안 영구적으로 유지됨
//   - indexDB: 브라우저를 닫아도 영구적으로 유지됨 (많은 데이터를 저장하고자 할 때 사용, JSON 형태)

// - cookie: 클라이언트(브라우저) 혹은 서버에 데이터를 저장하고자 할 때 사용
//           용량이 상대적으로 작음(local storage: 5MB, cookie: 4KB)
//           요청으로 데이터를 다룰 수 있음
//           만료 날짜 지정 가능

// - session: 현재 작업중인 클라이언트의 정보를 서버에서 유지하기 위해 사용하는 데이터 저장방법
//            서버에서 데이터를 저장하는 방법
//            매 요청마다 확인
//            브라우저를 닫거나 시간이 지나면 만료됨
//            보안이 우수하지만 서버의 메모리를 사용하여 서버에 부담이 됨
//            사용자의 로그인 정보를 유지하기 위해 많이 사용됨

// storage <> cookie
// 브라우저에 데이터를 저장하는 공통점이 있음
// 용량: 많음 작음
// 만료기간: 없음 있음
// 요청서버: 없음 있음
// 클라이언트에서 발생하는 부수적인 작업은 storage에 저장
// 쿠키는 보안이 좋지는 않지만 storage보단 좋기 때문에(영구적이지 않아) 브라우저에 관해 예민한 내용을 저장할 떄 사용
// 서버에서 전송된 데이터를 브라우저에 저장하고 싶을 때 쿠키를 사용

// cookie <=> session
// 공통점 : 로그인 정보 유지
// 클라이언트에서만 사용 vs 서버에서 사용
// 브라우저를 닫아도 유지 vs 유지 x
//

export default function Storage() {

    const [storageKey, setStorageKey] = useState<string>('');
    const [storageValue, setStorageValue] = useState<string>('');

    // local storage 사용 방법
    //localStorage 내장 객체를 이용하여 local storage에 접근 가능
    const onStorageKeyChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        const { value } = event.target;
        setStorageKey(value);
    };

    const onStorageValueChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        const { value } = event.target;
        setStorageValue(value);
    };

    const onStorageSave = () => {
        localStorage.setItem(storageKey, storageValue);
    };

    const onGetStorageValue = () => {
        // localStorage.getItem(key);
        const value = localStorage.getItem(storageKey);
        setStorageValue(value ? value : '');
    }

    const onRemoveStorage = () => {
        // 스토리지 데이터 삭제
        // localStorage.removeItem(key);
        localStorage.removeItem(storageKey);
    }

    const onClearStorage = () => {
        localStorage.clear();
    }

    const onSessionStorageSave = () => {
        // 세션 스토리지에 작업을 하려면 sessionStorage 내장 객체 이용
        sessionStorage.setItem(storageKey, storageValue);
    }
  return (
    <div>
        스토리지 키: <input value={storageKey} onChange={onStorageKeyChange}/>
        스토리지 값: <input value={storageValue} onChange={onStorageValueChange}/>
        <button onClick={onStorageSave}>저장</button>
        <button onClick={onGetStorageValue}>검색</button>
        <button onClick={onRemoveStorage}>삭제</button>
        <button onClick={onClearStorage}>모두삭제</button>
        <button onClick={onSessionStorageSave}>세션 스토리지로 저장</button>
    </div>
  )
}
