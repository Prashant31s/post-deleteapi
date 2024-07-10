
import PostForm from "./PostForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-lg">Create a New Post</h2>
      <div className="flex fex-col justify-center items-center">
      <PostForm />
      </div>
      
    </div>
  );
}
