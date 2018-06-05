import React from 'react';

import { css }  from 'glamor';



const News =(props)=>{

    const styles1=css({
        margin: '15px',
        padding: '20px',
        background:'white',
        border:'2px solid #00FF7F',
        borderRadius:'8px',                       
        boxShadow:'5px 5px 6px gray',
        ' h3':{
            color:'#DC143C'
        },
        ' div':{
            display: 'flex',
            justifyContent: 'flex-start',
        },
        ' h3:hover':{
            color:'black'
        },
        ' div div':{
            display:'flex',
            flexDirection: 'column',
            marginLeft: '10px',
        },
        ' img':{
            border:'3px solid lightgray',
            padding:'3px',
            margin:'6px',
            boxShadow:'3px 3px 3px gray'
        },
        ' img:hover':{
            transform:'scale(1.05)'
        }
       
    })
    
    return(
       
        <div {...styles1}>
            <div>            
            <img src={props.news.url} alt="news"/>
            <div>
            <h3>{props.news.title}</h3>                       
            <p>{props.news.feed}</p>
            </div>
            </div>
        </div>
    )
}

export default News;