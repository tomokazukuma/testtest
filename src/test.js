
import './App.css';


function App() {
  return (
   <div className="formContainer"> 
      <form>
        <h1>PMツール</h1>
        <p1>従業員番号・パスワードを入力して、「ログイン」ボタンをクリックしてください。</p1>
        <br></br>
        <br></br>
        <p2>あああああああああああああああああああああああああああああああああああ</p2>
        <hr/>
         <div className="uiForm">
           <div className="formFiled1">
              <label>従業員番号（※0詰めの8桁）</label>  
              <input type="text" />  
           </div>
           <div className="formFiled2">
              <label>パスワード</label>  
              <input type="text" />   
           </div>
         </div>
             <button className="submitButton">ログイン</button>
      </form>
    </div>
  );
}

export default App;
