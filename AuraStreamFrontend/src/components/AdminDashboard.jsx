import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const mockData = {
      movies: [
        { id: "movie1", title: "Action Movie A", views: 1200 },
        { id: "movie2", title: "Comedy B", views: 850 },
        { id: "movie3", title: "Thriller C", views: 1500 },
        { id: "movie4", title: "Romance D", views: 980 },
      ],
    };

    // Sort movies by views in descending order
    const sortedMovies = mockData.movies.sort((a, b) => b.views - a.views);
    setMovieData(sortedMovies);
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-full py-20">
        <div className="w-full h-full mb-10 flex flex-col items-center">
          <h1 className="text-5xl py-20">
            Admin Dashboard - Movie View Analysis
          </h1>
          <table className="flex flex-col text-2xl justify-center items-center">
            <thead>
              <tr className="flex gap-20 mb-5">
                <th>Rank</th>
                <th>Movie Title</th>
                <th>Total Views</th>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-5">
              {movieData.map((movie, index) => (
                <tr className="flex justify-between gap-20" key={movie.id}>
                  <td>{index + 1}</td>
                  <td>{movie.title}</td>
                  <td>{movie.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full h-0.5 bg-zinc-200 my-20"></div>
        <div className="w-full h-screen flex flex-col items-center">
          <h1 className="text-6xl">Add a movie</h1>
          <form
            className="w-[70%] flex flex-col text-2xl gap-5 mt-10 "
            action=""
          >
            <label htmlFor="">Title of the movie</label>
            <input className="border solid rounded-md" type="text" />

            <label htmlFor="">Description of the movie</label>
            <input className="border solid rounded-md" type="text" />

            <label htmlFor="">Release Date</label>
            <input className="border solid rounded-md" type="date" />

            <label htmlFor="">Add movie file</label>
            <input
              className="border solid rounded-md"
              type="file"
              name=""
              id=""
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
