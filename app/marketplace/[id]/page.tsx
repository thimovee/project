import React from "react"

async function fetchPost(id: string) {
  const postResponse = await fetch(
    `http://127.0.0.1:8090/api/collections/products/records/${id}`, {cache: "no-cache"}
  );
  return postResponse.json();
}

export default async function BlogPost({ params }: any) {
  const format = (num) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const { id } = params;
  const post = await fetchPost(id);
  return (
    <>
      <div className="w-[30rem] border-[1px] border-[#1a1a1a] rounded-t-xl flex  mr-auto ml-40 mt-32 text-white">
            <div className="flex flex-col">
            <span className="text-3xl my-auto font-bold">Product ID {post.id}</span>
            <span>Price: {post.price}</span>
            <span>Genre: {post.genre}</span>
            <span>Condition: {post.condition}</span>
            <span>Release: {post.releaseDate}</span>
            <img src={post.image}/>
            </div>
      </div>
    </>
  );
}