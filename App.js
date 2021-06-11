import './App.css';
import React, {useState} from 'react'

function App() {
  let [postTitle, postTitleChange] = useState( ['부산 여행 추천', '우리집에 왜 왔니', '가장 쉬고싶은 타이밍', '나의 벨로그'] );
  let [dumbsUp, dumbsUpChange] = useState(0)
  let [modal, modalChange] = useState(false)


  function changeTitle(){
    let newArr = [...postTitle]
    newArr = newArr.sort() 
    postTitleChange(newArr)
  }

  function resetPage(){
    window.location.reload()
  }

  return (
    <div className="App">
      {
      postTitle.map((el) => {
        return (
        <div className="list">
         <h3 onClick = { () => { modalChange(!modal)}}>{ el } 
         <span className = 'dumbs-up' onClick ={ () => {dumbsUpChange(dumbsUp + 1)}}>
          👍</span>{dumbsUp}
         </h3>
         <p>2월 17일 발행</p>
         <hr/>
       </div>
        )
      }) 
      }
      <p>
        <button onClick = { changeTitle }>블로그 글제목 바꾸기</button>
      </p>
      <p>
        <button onClick = { resetPage }>새로고침</button>
      </p>

      {
        modal === true
        ? <Modal />
        : null
      }

    </div>
  );
}

function Modal(){
    return(
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
        
}

export default App;
