import { Component } from "react";

const backImage = "https://storge.pic2.me/c/1360x800/540/5f9dcf95901612.54097334.jpg";


export default class HomePage extends Component {
    render() {
        return(
            <div>
                <div>
                <p className="mainText">
                Природа вражає нас своєю красою та величчю. 
                Проте людство дуже часто не звертає уваги на її чарівність та силу. 
                Через це природа потерпає та нищиться. 
                Люди знищують ліси, забруднюють навколишнє середовище, масово вбивають звірів. 
                Баланс у природі порушується та вона починає відповідати людям катастрофами.
                Mи і природа - нерозривна єдність, тому необхідно піклуватись про неї та насолоджуватись її красою! 
            </p>
                </div>
                <div className= "bckImg">
            <img src={backImage}   alt='avatar'/>
                </div>
            </div>

        
        )
    }
}