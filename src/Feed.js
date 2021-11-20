import React, { useState } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = (e) => {
        e.preeventDefault();

        
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" />
                        <button onClick={sendPost} type="submit" className="">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                    <InputOption Icon={EventIcon} title='Event' color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
                <Post />
            ))}
            <Post name="Jay Jay" description="testing..." message="wow, Awesome!" />
        </div>
    )
}

export default Feed;
