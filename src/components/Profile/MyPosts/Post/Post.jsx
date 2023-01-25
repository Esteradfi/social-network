import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img alt="ava" src="https://shutniks.com/wp-content/uploads/2020/02/photo-1.jpg"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;