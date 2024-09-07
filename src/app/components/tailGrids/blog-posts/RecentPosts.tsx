// "use client";
// import React, { useEffect, useState } from "react";
// import Loader01 from "../loaders/loader01";
// import { format } from "date-fns";

// // Function to format date
// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return format(date, "MMM d, yyyy h:mm a");
// };

// const getPosts = async () => {
//   try {
//     console.log("fetching now ...");
//     console.log("loading now....");
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const posts = await response.json();
//     return posts;
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// };

// const BlogCard = ({
//   image,
//   date,
//   CardTitle,
//   CardDescription,
//   CardAuthor,
// }: any) => {
//   const formattedDate = formatDate(date);

//   return (
//     <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//       <div className="flex flex-col h-full mb-10 bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden">
//         <div className="mb-8 overflow-hidden rounded">
//           <img src={image} alt="" className="w-full h-64 object-cover" />
//         </div>
//         <div className="flex flex-col flex-1 p-4">
//           <a
//             href="/#"
//             className="mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
//             dangerouslySetInnerHTML={{ __html: CardTitle }}
//           ></a>
//           <a
//             href="/#"
//             className="mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
//             dangerouslySetInnerHTML={{ __html: CardAuthor }}
//           ></a>
//           {date && (
//             <span className="w-[63%] mb-5 text-black">
//               Published: {formattedDate}
//             </span>
//           )}
//           <p className="text-base text-body-color dark:text-dark-6 flex-1">
//             <span dangerouslySetInnerHTML={{ __html: CardDescription }}></span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Blog = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const data = await getPosts();
//       setPosts(data);
//       setIsLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   if (isLoading) {
//     return <Loader01 />;
//   }

//   if (posts.length === 0) {
//     return <p>No posts available.</p>;
//   }

//   return (
//     <section className="w-[100vw] bg-white pb-10 pt-20 dark:bg-dark lg:pb-200 lg:pt-[160px]">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
//               <span className="mb-2 block text-lg font-semibold text-primary">
//                 Our Latest News
//               </span>
//               <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
//                 Recent Posts
//               </h2>
//               <p className="text-base text-body-color dark:text-dark-6">
//                 Stay in touch with the latest trends, news, events, and offers
//                 ...
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="w-full flex flex-row gap-2">
//           {posts.map((post: any) => (
//             <BlogCard
//               key={post.id}
//               date={post.date}
//               CardTitle={post.title.rendered}
//               CardDescription={post.excerpt.rendered}
//               CardAuthor={post._embedded?.author?.[0]}
//               image={
//                 post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                 "https://placehold.co/600x400"
//               }
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

"use client";
import React, { useEffect, useState } from "react";
import Loader01 from "../loaders/loader01";
import { format } from "date-fns";

// Function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "MMM d, yyyy h:mm a");
};

const getPosts = async () => {
  try {
    console.log("fetching now ...");
    console.log("loading now....");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed&per_page=6`
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

const BlogCard = ({
  image,
  date,
  CardTitle,
  CardDescription,
  CardAuthor,
}: any) => {
  const formattedDate = formatDate(date);

  // Extract author name safely
  const authorName =
    CardAuthor && CardAuthor.name ? CardAuthor.name : "Unknown Author";

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="flex flex-col h-full mb-10 bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden">
        <div className="mb-8 overflow-hidden rounded">
          <img src={image} alt="" className="w-full h-64 object-cover" />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <a
            href="/#"
            className="mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            dangerouslySetInnerHTML={{ __html: CardTitle }}
          ></a>
          <span className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
            Post Author: {authorName}
          </span>
          {date && (
            <span className="w-[63%] mb-5 text-black">
              Published: {formattedDate}
            </span>
          )}
          <p className="text-base text-body-color dark:text-dark-6 flex-1">
            <span dangerouslySetInnerHTML={{ __html: CardDescription }}></span>
          </p>
        </div>
      </div>
    </div>
  );
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
    <section className="w-[100vw] bg-white pb-10 pt-20 dark:bg-dark lg:pb-200 lg:pt-[160px]">
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

        <div className="w-full flex flex-wrap gap-y-8">
          {posts.map((post: any) => (
            <BlogCard
              key={post.id}
              date={post.date}
              CardTitle={post.title.rendered}
              CardDescription={post.excerpt.rendered}
              CardAuthor={post._embedded?.author?.[0]} // Access the first author
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
