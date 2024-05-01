import React, { Component } from 'react';

class BaiTap extends Component {
    glasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]


    state = {
        glesses: {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    handleClick = (item) => {

        let newState = item;
        console.log(item);
        this.setState({
            glesses: newState
        })

    }
    render() {
        return (
            <div className='container'>
                <div className="header"><h2>TRY GLASSES APP ONLINE</h2></div>
                <div className="model">
                    <div className="model-left">
                        <img src="./img/glassesImage/model.jpg" alt="" />
                        <div className='change-classes'>
                            <div><img src={this.state.glesses.url} alt="img" /></div>
                            <div className='desc-classes'>
                                <p>
                                    {this.state.glesses.name}
                                </p>
                                <span>
                                    {this.state.glesses.desc}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="model-right">
                        <img src="./img/glassesImage/model.jpg" alt="" />
                    </div>
                </div>
                <div className="list-glasses">
                    {this.glasses.map((item, index) => <img key={index} src={item.url} alt="img" onClick={() => { this.handleClick(item) }} />
                    )}
                </div>
            </div>
        );
    }
}

export default BaiTap;