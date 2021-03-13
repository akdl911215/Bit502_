const ArticleDetail = () => 
(
    <div> 
        <ul> 
            {list.map(item => { return ( <li key={item.num}> {item.input1} / {item.input2} <button>Read</button> //추가 </li> ); })} 
        </ul> 
     </div>

)

export default ArticleDetail;
