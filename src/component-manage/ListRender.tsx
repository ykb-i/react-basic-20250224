import React from 'react'

// 리스트 렌더링:
// - JSX 내부에서 배열을 반복하여 렌더링하는 방법
// - JSx 내부에서는 for, while 같은 반복문을 사용할 수 없음
// - 리스트의 각종 고차 함수를 사용


export default function ListRender() {
  const fruitArr = ['apple', 'banana', 'cacao'];
  // map을 이용하여 렌더링
  const fruits = fruitArr.map((fruit, index) =>
    <h3 key={index}>{fruit}</h3>
  );
  
  // filter를 이용하여 렌더링
  const filteredItems = fruitArr.filter((fruit, index)=> index % 2 === 0);
  const filteredArrayItems = filteredItems.map((fruit, index) => <h3 key={index}>{fruit}</h3>)
  
  // 리스트를 반복하여 렌더링 할땐 요소의 시작 태그에 key 속성을 지정해야함
  // key 속성의 역할 : 반복되는 요소에 대해 고유성을 부여해주는 역할
  
  return (
    <div>
        {fruitArr}
        {fruits}

        {fruitArr.filter((fruit, index)=> index % 2 === 0).map((fruit,index) => <h3>{fruit}</h3>)}

        {new Array(10).fill(0).map((_, index)=> <h3 key={index}>반복하는 요소!!!</h3>)}
    </div>
  )
}
