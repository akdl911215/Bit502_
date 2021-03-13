const ArticleList = () => 
(
    <div> 
        <ul> 
            {list.map(item => { return ( <li key={item.num}> {item.input1} / {item.input2} <button>Delete</button> //추가 </li> ); })} 
        </ul> 
     </div>

)

export default ArticleList;
