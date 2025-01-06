import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            const errorData = await response.json(); // Await error JSON parsing
            console.error(`API Error: ${response.status} - ${response.statusText}`);
            console.error('Error details:', errorData);
            throw new Error(errorData.message || 'API call failed');
        }

        return await response.json(); // Parse successful response
    } catch (error) {
        console.error('Error in getUpcomingMovies:', error);
        throw error; // Rethrow the error to propagate it
    }
};

