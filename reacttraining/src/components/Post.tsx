/** @format */

type Props = {
  title: string;
  body: string;
  count?: number;
};

const Post = ({ title, body, count }: Props) => {
  // console.log('post render ', title);
  return (
    <div>
      <strong>{title}</strong>
      <p>{body}</p>
      {count && <p>{count}</p>}
    </div>
  );
};

export default Post;
