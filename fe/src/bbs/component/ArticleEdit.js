const ArticleEdit = () => 
(
    <div> 
        <ul> 
            {list.map(item => { return ( <li key={item.num}> {item.input1} / {item.input2} <button>UpDate</button> //추가 </li> ); })} 
        </ul> 
     </div>

)

export default ArticleEdit;
