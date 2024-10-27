import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hero() {
    const [randomArticle, setRandomArticle] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-10-25&to=2024-10-25&sortBy=popularity&apiKey=${process.env.VITE_NEWS_API_KEY}`);
                
                const filteredArticles = response.data.articles.filter(article => article.urlToImage);
                
                if (filteredArticles.length > 0) {
                    const randomIndex = Math.floor(Math.random() * filteredArticles.length);
                    setRandomArticle(filteredArticles[randomIndex]);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white w-full h-[50rem]">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
                }}
            ></div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Discover the Latest from Bulletin
                    </h1>
                    <p className="text-xl mb-8 text-gray-300">
                        Stay informed with insightful articles and breaking news that matter to you. 
                        Dive into a world of knowledge, innovation, and inspiration.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#"
                            className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center"
                        >
                            Explore News
                        </a>
                        <a
                            href="#"
                            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                        >
                            Subscribe Now
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/2 md:pl-12">
                    {randomArticle ? (
                        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-4 shadow-2xl mb-4">
                            <img
                                src={randomArticle.urlToImage}
                                alt="News Article"
                                className="w-full h-80 rounded-lg object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{randomArticle.title}</h3>
                            <p className="text-gray-300 mb-4">
                                {randomArticle.description}
                            </p>
                            <a
                                href={randomArticle.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                Read more...
                            </a>
                        </div>
                    ) : (
                        <p className="text-gray-300">No articles available.</p>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>

            <div className="absolute -top-[1rem] right-[21rem] z-50">
                <svg
                    viewBox="0 0 400 40"
                    className="w-[30rem] 2xl:w-[40rem] h-[4rem] rounded-b-lg"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0H400V40H0Z"
                        fill="white"
                        className='rounded-b-lg'
                    />
                </svg>
            </div>
        </section>
    );
}

export default Hero;
