import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=title" alt=""
            />
            <div className="postInfo">
                <div className="postCasts">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr/>
                <span className ="postDate"> 1 hour ago</span>
                <div className="postDesc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, exercitationem consectetur! Tempore sequi velit molestias! Neque quae nihil ea repellendus ipsa modi, inventore voluptate quaerat animi velit beatae similique esse?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, exercitationem consectetur! Tempore sequi velit molestias! Neque quae nihil ea repellendus ipsa modi, inventore voluptate quaerat animi velit beatae similique esse?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, exercitationem consectetur! Tempore sequi velit molestias! Neque quae nihil ea repellendus ipsa modi, inventore voluptate quaerat animi velit beatae similique esse?
                    </p>
                </div>
            </div>
        </div>
    )
}
