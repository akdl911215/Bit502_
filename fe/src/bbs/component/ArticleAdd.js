import Map from './Map';
import React, { Component } from 'react';



const ArticleAdd = () => 



    (
        <div> 
            <ul> 
                {list.map(item => { return ( <li key={item.num}> {item.input1} / {item.input2} <button>add</button> //추가 </li> ); })} 
            </ul> 
         </div>

    )

export default ArticleAdd;
