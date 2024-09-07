// "use client";
// import React, { useEffect, useState, useRef, useCallback } from "react";
// import Loader01 from "../loaders/loader01";
// import { format } from "date-fns";

// // Function to format date
// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return format(date, "MMM d, yyyy h:mm a");
// };

// // Function to fetch posts with pagination
// const getPosts = async (page) => {
//   try {
//     console.log("fetching now ...");
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed&per_page=6&page=${page}`
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

// const BlogCard = ({ image, date, CardTitle, CardDescription, CardAuthor }) => {
//   const formattedDate = formatDate(date);

//   const authorName =
//     CardAuthor && CardAuthor.name ? CardAuthor.name : "Unknown Author";

//   return (
//     <div className="w-full px-4 md:w-1/2 lg:w-[33%]">
//       <div className="flex flex-col h-full mb-10 bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden">
//         <div className="mb-8 overflow-hidden rounded">
//           <img
//             src={image}
//             alt=""
//             className="w-full h-64 object-cover"
//             loading="lazy" // Lazy load images
//           />
//         </div>
//         <div className="flex flex-col flex-1 p-4">
//           <a
//             href="/#"
//             className="mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
//             dangerouslySetInnerHTML={{ __html: CardTitle }}
//           ></a>
//           <span className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
//             Post Author: {authorName}
//           </span>
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
//   const [page, setPage] = useState(1); // Track the current page for pagination
//   const [hasMore, setHasMore] = useState(true); // Track if there are more posts to load

//   // Ref for the last post element for infinite scrolling
//   const observerRef = useRef();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const data = await getPosts(page);
//       setPosts((prevPosts) => [...prevPosts, ...data]);
//       setIsLoading(false);
//       if (data.length < 6) {
//         setHasMore(false); // Stop loading when no more posts are available
//       }
//     };

//     fetchPosts();
//   }, [page]);

//   // Intersection Observer to detect when the last post is in view
//   const lastPostRef = useCallback(
//     (node) => {
//       if (isLoading) return;
//       if (observerRef.current) observerRef.current.disconnect();
//       observerRef.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           setPage((prevPage) => prevPage + 1); // Load the next page
//         }
//       });
//       if (node) observerRef.current.observe(node);
//     },
//     [isLoading, hasMore]
//   );

//   if (isLoading && page === 1) {
//     return <Loader01 />;
//   }

//   if (posts.length === 0 && !isLoading) {
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
//         <div className="w-full flex flex-wrap justify-start gap-y-8 clear-start">
//           {posts.map((post, index) => {
//             if (index === posts.length - 1) {
//               // Attach lastPostRef to the last post for infinite scroll detection
//               return (
//                 <div ref={lastPostRef} key={post.id}>
//                   <BlogCard
//                     date={post.date}
//                     CardTitle={post.title.rendered}
//                     CardDescription={post.excerpt.rendered}
//                     CardAuthor={post._embedded?.author?.[0]}
//                     image={
//                       post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                       "https://placehold.co/600x400"
//                     }
//                   />
//                 </div>
//               );
//             } else {
//               return (
//                 <BlogCard
//                   key={post.id}
//                   date={post.date}
//                   CardTitle={post.title.rendered}
//                   CardDescription={post.excerpt.rendered}
//                   CardAuthor={post._embedded?.author?.[0]}
//                   image={
//                     post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                     "https://placehold.co/600x400"
//                   }
//                 />
//               );
//             }
//           })}
//         </div>
//         {isLoading && page > 1 && <Loader01 />}{" "}
//         {/* Show loader when loading more */}
//       </div>
//     </section>
//   );
// };

// export default Blog;

// "use client";
// import React, { useEffect, useState, useRef, useCallback } from "react";
// import Loader01 from "../loaders/loader01";
// import { format } from "date-fns";

// // Function to format date
// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return format(date, "MMM d, yyyy h:mm a");
// };

// // Function to fetch posts with pagination
// const getPosts = async (page) => {
//   try {
//     console.log("fetching now ...");
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed&per_page=6&page=${page}`
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

// const BlogCard = ({ image, date, CardTitle, CardDescription, CardAuthor }) => {
//   const formattedDate = formatDate(date);

//   const authorName =
//     CardAuthor && CardAuthor.name ? CardAuthor.name : "Unknown Author";

//   return (
//     <div className="w-full px-4 md:w-1/2 lg:w-[33%]">
//       <div className="flex flex-col h-full mb-10 bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden">
//         <div className="mb-8 overflow-hidden rounded">
//           <img
//             src={image}
//             alt=""
//             className="w-full h-64 object-cover"
//             loading="lazy" // Lazy load images
//           />
//         </div>
//         <div className="flex flex-col flex-1 p-4">
//           <a
//             href="/#"
//             className="mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
//             dangerouslySetInnerHTML={{ __html: CardTitle }}
//           ></a>
//           <span className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
//             Post Author: {authorName}
//           </span>
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
//   const [page, setPage] = useState(1); // Track the current page for pagination
//   const [hasMore, setHasMore] = useState(true); // Track if there are more posts to load

//   // Ref for the last post element for infinite scrolling
//   const observerRef = useRef();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const data = await getPosts(page);
//       setPosts((prevPosts) => [...prevPosts, ...data]);
//       setIsLoading(false);
//       if (data.length < 6) {
//         setHasMore(false); // Stop loading when no more posts are available
//       }
//     };

//     fetchPosts();
//   }, [page]);

//   // Intersection Observer to detect when the last post is in view
//   const lastPostRef = useCallback(
//     (node) => {
//       if (isLoading) return;
//       if (observerRef.current) observerRef.current.disconnect();
//       observerRef.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           setPage((prevPage) => prevPage + 1); // Load the next page
//         }
//       });
//       if (node) observerRef.current.observe(node);
//     },
//     [isLoading, hasMore]
//   );

//   if (isLoading && page === 1) {
//     return <Loader01 />;
//   }

//   if (posts.length === 0 && !isLoading) {
//     return <p>No posts available.</p>;
//   }

//   // Check if the number of posts is odd, if so, remove the last post to make it even
//   const postsToDisplay = posts.length % 2 === 1 ? posts.slice(0, -1) : posts;

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
//         <div className="w-full flex flex-wrap justify-start gap-y-8">
//           {postsToDisplay.map((post, index) => {
//             if (index === postsToDisplay.length - 1) {
//               // Attach lastPostRef to the last post for infinite scroll detection
//               return (
//                 <div ref={lastPostRef} key={post.id}>
//                   <BlogCard
//                     date={post.date}
//                     CardTitle={post.title.rendered}
//                     CardDescription={post.excerpt.rendered}
//                     CardAuthor={post._embedded?.author?.[0]}
//                     image={
//                       post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                       "https://placehold.co/600x400"
//                     }
//                   />
//                 </div>
//               );
//             } else {
//               return (
//                 <BlogCard
//                   key={post.id}
//                   date={post.date}
//                   CardTitle={post.title.rendered}
//                   CardDescription={post.excerpt.rendered}
//                   CardAuthor={post._embedded?.author?.[0]}
//                   image={
//                     post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                     "https://placehold.co/600x400"
//                   }
//                 />
//               );
//             }
//           })}
//         </div>
//         {isLoading && page > 1 && <Loader01 />}{" "}
//         {/* Show loader when loading more */}
//       </div>
//     </section>
//   );
// };

// export default Blog;

// "use client";
// import React, { useEffect, useState, useRef, useCallback } from "react";
// import Loader01 from "../loaders/loader01";
// import { format } from "date-fns";

// // Function to format date
// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return format(date, "MMM d, yyyy h:mm a");
// };

// // Function to fetch posts with pagination
// const getPosts = async (page) => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed&per_page=6&page=${page}`
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

// const BlogCard = ({ image, date, CardTitle, CardDescription, CardAuthor }) => {
//   const formattedDate = formatDate(date);

//   const authorName =
//     CardAuthor && CardAuthor.name ? CardAuthor.name : "Unknown Author";

//   return (
//     <div className="w-full px-4 md:w-1/2 lg:w-[33%]">
//       <div className="flex flex-col h-full mb-10 bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden">
//         <div className="mb-8 overflow-hidden rounded">
//           <img
//             src={image}
//             alt=""
//             className="w-full h-64 object-cover"
//             loading="lazy" // Lazy load images
//           />
//         </div>
//         <div className="flex flex-col flex-1 p-4">
//           <a
//             href="/#"
//             className="mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
//             dangerouslySetInnerHTML={{ __html: CardTitle }}
//           ></a>
//           <span className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
//             Post Author: {authorName}
//           </span>
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
//   const [isLoading, setIsLoading] = useState(true); // For initial loading
//   const [isLoadingMore, setIsLoadingMore] = useState(false); // For loading more posts while scrolling
//   const [page, setPage] = useState(1); // Track the current page for pagination
//   const [hasMore, setHasMore] = useState(true); // Track if there are more posts to load

//   // Ref for the last post element for infinite scrolling
//   const observerRef = useRef();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setIsLoading(true);
//       const data = await getPosts(page);
//       setPosts((prevPosts) => [...prevPosts, ...data]);
//       setIsLoading(false);
//       if (data.length < 6) {
//         setHasMore(false); // Stop loading when no more posts are available
//       }
//     };

//     fetchPosts();
//   }, [page]);

//   // Intersection Observer to detect when the last post is in view
//   const lastPostRef = useCallback(
//     (node) => {
//       if (isLoadingMore) return;
//       if (observerRef.current) observerRef.current.disconnect();
//       observerRef.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore) {
//           setIsLoadingMore(true); // Start loading more posts
//           setPage((prevPage) => prevPage + 1); // Load the next page
//         }
//       });
//       if (node) observerRef.current.observe(node);
//     },
//     [isLoadingMore, hasMore]
//   );

//   useEffect(() => {
//     // Stop the "loading more" state once posts are loaded
//     if (!isLoadingMore) return;
//     const loadMorePosts = async () => {
//       const newPosts = await getPosts(page);
//       setPosts((prevPosts) => [...prevPosts, ...newPosts]);
//       setIsLoadingMore(false);
//       if (newPosts.length < 6) {
//         setHasMore(false); // No more posts to load
//       }
//     };

//     loadMorePosts();
//   }, [isLoadingMore, page]);

//   if (isLoading && page === 1) {
//     return <Loader01 />;
//   }

//   if (posts.length === 0 && !isLoading) {
//     return <p>No posts available.</p>;
//   }

//   // Check if the number of posts is odd, and remove the last one if needed
//   const postsToDisplay = posts.length % 2 === 1 ? posts.slice(0, -1) : posts;

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

//         <div className="w-full flex flex-wrap justify-start gap-y-8">
//           {postsToDisplay.map((post, index) => {
//             if (index === postsToDisplay.length - 1) {
//               // Attach lastPostRef to the last post for infinite scroll detection
//               return (
//                 <div ref={lastPostRef} key={post.id}>
//                   <BlogCard
//                     date={post.date}
//                     CardTitle={post.title.rendered}
//                     CardDescription={post.excerpt.rendered}
//                     CardAuthor={post._embedded?.author?.[0]}
//                     image={
//                       post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                       "https://placehold.co/600x400"
//                     }
//                   />
//                 </div>
//               );
//             } else {
//               return (
//                 <BlogCard
//                   key={post.id}
//                   date={post.date}
//                   CardTitle={post.title.rendered}
//                   CardDescription={post.excerpt.rendered}
//                   CardAuthor={post._embedded?.author?.[0]}
//                   image={
//                     post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//                     "https://placehold.co/600x400"
//                   }
//                 />
//               );
//             }
//           })}
//         </div>

//         {/* Show the loader while more posts are being fetched during scrolling */}
//         {isLoadingMore && (
//           <div className="w-full text-center mt-8">
//             <Loader01 />
//             <p>Loading more posts...</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Blog;

"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Loader01 from "../loaders/loader01";
import { format } from "date-fns";

// Function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "MMM d, yyyy h:mm a");
};

interface Post {
  id: number;
  content: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    author?: Array<{
      name: string;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

// Function to fetch posts with pagination
const getPosts = async (page: number): Promise<Post[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed&per_page=6&page=${page}`
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

  const authorName =
    CardAuthor && CardAuthor.name ? CardAuthor.name : "Unknown Author";

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-[33%]">
      <div className="flex flex-col h-full mb-10 bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden">
        <div className="mb-8 overflow-hidden rounded">
          <img
            src={image}
            alt=""
            className="w-full h-64 object-cover"
            loading="lazy" // Lazy load images
          />
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // For initial loading
  const [isLoadingMore, setIsLoadingMore] = useState(false); // For loading more posts while scrolling
  const [page, setPage] = useState<number>(1); // Track the current page for pagination
  const [hasMore, setHasMore] = useState<boolean>(true); // Track if there are more posts to load

  // Ref for the last post element for infinite scrolling
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const data = await getPosts(page);
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setIsLoading(false);
      if (data.length < 6) {
        setHasMore(false); // Stop loading when no more posts are available
      }
    };

    fetchPosts();
  }, [page]);

  // Intersection Observer to detect when the last post is in view
  // Type allows IntersectionObserver or null

  const lastPostRef = useCallback(
    (node: HTMLElement | null) => {
      // node can be an HTMLElement or null
      if (isLoadingMore) return;

      // Disconnect the observer if it exists
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Create a new IntersectionObserver and assign it to observerRef
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setIsLoadingMore(true); // Start loading more posts
          setPage((prevPage) => prevPage + 1); // Load the next page
        }
      });

      // Observe the node if it exists
      if (node) {
        observerRef.current.observe(node);
      }
    },
    [isLoadingMore, hasMore]
  );

  useEffect(() => {
    // Stop the "loading more" state once posts are loaded
    if (!isLoadingMore) return;
    const loadMorePosts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Add a 2-second delay
      const newPosts = await getPosts(page);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setIsLoadingMore(false);
      if (newPosts.length < 6) {
        setHasMore(false); // No more posts to load
      }
    };

    loadMorePosts();
  }, [isLoadingMore, page]);

  if (isLoading && page === 1) {
    return <Loader01 />;
  }

  if (posts.length === 0 && !isLoading) {
    return (
      <div className="w-full min-h-[80vh] mx-auto text-center py-24 flex flex-col justify-center items-center text-emerald-500 pt-[160px]">
        <p className="text-3xl font-light w-1/2 mx-auto">
          We&apos;re so sorry there are no published posts at the moment, please
          check again later....
        </p>
      </div>
    );
  }

  // Check if the number of posts is odd, and remove the last one if needed
  const postsToDisplay = posts.length % 2 === 1 ? posts.slice(0, -1) : posts;

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

        <div className="w-full flex flex-wrap justify-start gap-y-8">
          {postsToDisplay.map((post, index) => {
            if (index === postsToDisplay.length - 1) {
              // Attach lastPostRef to the last post for infinite scroll detection
              return (
                <div ref={lastPostRef} key={post.id}>
                  <BlogCard
                    date={post.date}
                    CardTitle={post.title.rendered}
                    CardDescription={post.excerpt.rendered}
                    CardAuthor={post._embedded?.author?.[0]}
                    image={
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      "https://placehold.co/600x400"
                    }
                  />
                </div>
              );
            } else {
              return (
                <BlogCard
                  key={post.id}
                  date={post.date}
                  CardTitle={post.title.rendered}
                  CardDescription={post.excerpt.rendered}
                  CardAuthor={post._embedded?.author?.[0]}
                  image={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://placehold.co/600x400"
                  }
                />
              );
            }
          })}
        </div>

        {/* Show the loader while more posts are being fetched during scrolling */}
        {isLoadingMore && (
          <div className="w-full text-center mt-8">
            <p>Loading more posts...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
