import React from 'react';
import './Portfolio.css';
import data from './data'; 

const Portfolio = () => {
    const [item,setItem]= React.useState(data);
    const filterItem =(cateItem=>{
        const updateItem = data.filter((curElemt)=>{
            return curElemt.category === cateItem
        })
        setItem(updateItem);
    })
    return (
        <section className="portfolio mtop">
            <div className="container">
                
                <div className="head flexSB">
                    <div className="left">
                    <h6>Creative Works</h6>
                    <h2>Check my Portfolio</h2>
                    </div>
                    
                </div>

                <div className="links">
                    <ul className="flexSB">
                        <li className="active" onClick={()=> setItem(data)}>All</li>
                        <li  onClick={()=> filterItem("Products")}>Product</li>
                        <li  onClick={()=> filterItem("Intraction")}>Intraction</li>
                        <li  onClick={()=> filterItem("Brand Identity")}>Brand Identity</li>
                        
                    </ul>
                </div>

                <div className="content grid mtop">
                    {
                        item.map((element)=>{
                            const {cover, title}= element;
                            return(
                                <div className="box">
                                    <div className="img">
                                        <img src={cover} alt=""/>
                                    </div>

                                    <div className="overlay">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;