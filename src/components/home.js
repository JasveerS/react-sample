import React from 'react';

import { css } from 'glamor';

//componetns
import News from './news'





const Home =(props)=>{
    
    const styles=css({        
        background:'radial-gradient(circle, lightgray, gray, white)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '25px',
        borderBottom:'3px solid gray',
        
        ' input':{
            width:'250px',
            height:'30px',
            alignItems: 'center',
            alignSelf: 'center',
            border:'1px solid black',
            boxShadow:"4px 4px 4px gray"
        },
        ' h1':{
            padding:'15px',
            alignItems: 'center',
            alignSelf: 'center',
            border:'2px solid black',
            boxShadow:'5px 7px 5px gray',
            background:'#00FF7F'
        },
        ' h1:hover':{            
            background:'white',
            boxShadow: '10px 10px 10px gray',
            transform:'scale(1.1)'

        }
        

    })
 //news copontest data here

       const newsItems=props.news.map((item)=>{
                return(
                    <News key={item.id} news={item}/>
                )
       })
       




    return(
        <div>
        <div {...styles}>
            <h1>LOGO</h1>

                <input type="text" onChange={props.keyWord}/>
            <div>
                <h4>Google</h4>
                <h4>Facebook</h4>
                <h4>LinkIn</h4>
            </div>
           
        </div>
            {newsItems}
        </div>
    )
}

export default Home;