import {Component} from "react";
import Post from "./Post/Post.js";
import './Post/Post.css';

const RAY_IMAGE = 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';
const ANAKIN_IMAGE = 'https://www.stuttgarter-nachrichten.de/media.media.e6936418-4294-410e-a9b4-974c61eb4da3.original1024.jpg';

export default class PostsPage extends Component {
    render() {
        return (
            <div className='posts-container'>
                <Post author={{
                    name: "Anakin skywalker",
                    photo: ANAKIN_IMAGE,
                    nickname: "@dart_vader"
                }}
                      content='WTF? Who is Ray? Why she is Skywalker? Luke...?'
                      image={RAY_IMAGE}
                      date={"26 февр."}/>
                <Post author={{
                    name: "Anakin skywalker",
                    photo: ANAKIN_IMAGE,
                    nickname: "@dart_vader"
                }}
                      content='WTF? Who is Ray? Why she is Skywalker? Luke...?'
                      image={RAY_IMAGE}
                      date={"26 февр."}/>


            </div>
        );
    }
}