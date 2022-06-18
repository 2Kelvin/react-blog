import Onepost from "./Onepost";

const Feed = ({posts}) => {
    return (
        <>
            {posts.map(post =>
                (<Onepost
                    key={post.id}
                    post={post}
                />)
            )}
        </>
    );
};

export default Feed;