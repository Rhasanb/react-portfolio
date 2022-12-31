import React from 'react';

const Service = () => {
    const header={
        mainHeader:"My Expertise",
        subHeading:"Provide Wide Range of Digital services"
    };

    const state=[
        {
            id:1,
            icon:'./images/dd.png',
            heading: "Ui Design",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae adipisci in molestias minus alias ipsum quae doloribus quos tempore maxime fugit eveniet laudantium necessitatibus, obcaecati voluptatum nisi libero commodi!"
        },

        {
            id:2,
            icon:'./images/web.png',
            heading: "Web Development",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima est sequi, cum deleniti iusto necessitatibus vero placeat impedit aperiam quisquam cupiditate, suscipit accusantium quidem voluptas ratione ducimus nemo quaerat numquam?"

        }



    ]
    return (
       <div className="services">
        <div className="container">
            <div className="services_header">
                <div className="common">
                    <h6 className="heading">{header.mainHeader}</h6>
                    <h2 className="subheading">{header.subHeading}</h2>
                    <div className="commonBorder"></div>
                </div>
                <div className="row bgMain">
                    {
                        state.map((info)=>(
                            <div className="col-6 bgMain">
                                <div className="services_box">
                                    <img src={info.icon} alt="" className='commonIcons' />
                                    <h4 className="services_box-header">{info.heading}</h4>
                                    <p className="services_box-p">{info.text}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
       </div>
    );
};

export default Service;