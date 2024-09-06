// "use client";
// import React, { useEffect, useState } from "react";

// const getPosts: any = async () => {
//   try {
//     console.log("fetching now ...");
//     console.log("loading now....");
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts`
//     );
//     const posts = await response.json();
//     return posts;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

// const Blog = async () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const posts = await getPosts();

//   setIsLoading(false);
//   return (
//     <>
//       <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
//         <div className="container mx-auto">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
//                 <span className="mb-2 block text-lg font-semibold text-primary">
//                   Our Latest News
//                 </span>
//                 <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
//                   Recent Posts
//                 </h2>
//                 <p className="text-base text-body-color dark:text-dark-6">
//                   Stay in touch with the latest trends, news, events, and offers
//                   ...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="-mx-4 flex flex-wrap">
//           {
//             if(isLoading === true){

//             }else{
//               {posts.map((post: any) => (
//                 <BlogCard
//                   key={post.id}
//                   date="Dec 22, 2023"
//                   CardTitle={post.title.rendered}
//                   CardDescription={post.content.rendered}
//                   image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
//                 />
//               ))}
//             }
//           }

//             {/* <BlogCard
//               date="Dec 22, 2023"
//               CardTitle="Meet AutoManage, the best AI management tools"
//               CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//               image="https://i.ibb.co/Y23YC07/image-02.jpg"
//             />
//             <BlogCard
//               date="Dec 22, 2023"
//               CardTitle="Meet AutoManage, the best AI management tools"
//               CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//               image="https://i.ibb.co/7jdcnwn/image-03.jpg"
//             /> */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;

// const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
//   return (
//     <>
//       <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//         <div className="mb-10 w-full">
//           <div className="mb-8 overflow-hidden rounded">
//             <img src={image} alt="" className="w-full" />
//           </div>
//           <div>
//             {date && (
//               <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
//                 {date}
//               </span>
//             )}
//             <h3>
//               <a
//                 href="/#"
//                 className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
//               >
//                 {CardTitle}
//               </a>
//             </h3>
//             <p className="text-base text-body-color dark:text-dark-6">
//               {CardDescription}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

"use client";
import React, { useEffect, useState } from "react";
import Loader01 from "../loaders/loader01";

const getPosts = async () => {
  try {
    console.log("fetching now ...");
    console.log("loading now....");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    return posts;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader01 />;
  }

  if (posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <section className="h-[100vh] bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Latest News
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Recent Posts
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Stay in touch with the latest trends, news, events, and offers
                ...
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.map((post: any) => (
            <BlogCard
              key={post.id}
              date="Dec 22, 2023"
              CardTitle={post.title.rendered}
              CardDescription={post.excerpt.rendered}
              image={
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "https://placehold.co/600x400"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
const BlogCard = ({ image, date, CardTitle, CardDescription }: any) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 w-full">
        <div className="mb-8 overflow-hidden rounded">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          {date && (
            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}

          <a
            href="/#"
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: CardTitle }}
          ></a>

          <p dangerouslySetInnerHTML={{ __html: CardDescription }}></p>
        </div>
      </div>
    </div>
  );
};
