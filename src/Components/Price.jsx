import React from 'react';

const Price = () => {
    const header={
        subHeading: "Popular Pricing Plan For Creative Project",
        text: "When building a website, start here.Our shared service delivers a powerful ,proven platform"
    };

    const state=[{
        id:1,
        heading:"Basic",
        price:30,
        msg1:"web Design(Ui)",
        msg2:"Web Development"
    },
    {
        id:2,
        heading:"Professional",
        price:99,
        msg1:"web Design(Ui)",
        msg2:"Web Development"
    },
    {
        id:3,
        heading:"Business",
        price:199,
        msg1:"web Design(Ui)",
        msg2:"Web Development"
    }




]
    return (
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h2 className="mainHeader">
                        {header.subHeading}
                    </h2>
                    <h6 className="mainContent">{header.text}</h6>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {
                        state.map((prices)=>
                            (
                                <div className="col-4" key={prices.id}>
                                    <div className="price">
                                        <div className="priceHeading">${prices.heading}</div>
                                        <div className="price-rs">
                                            <span>$</span>{prices.price}
                                        </div>
                                        <ul>
                                            <li>{prices.msg1}</li>
                                            <li>{prices.msg2}</li>
                                        </ul>
                                        <div className="price_btn">
                                            <a href="price" className="btn btn-outline">
                                                Start Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </div>
        
            
    );
};

export default Price;