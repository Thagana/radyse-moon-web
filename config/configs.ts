const dev = {
    SERVER_URL: 'http://localhost:4001',
    APP_URL: 'http://localhost:3001'
};

const prod = {
    SERVER_URL: 'https://ultimate-news-api.herokuapp.com',
    APP_URL: 'https://app.ultimatenews.xyz'
}


export const config = process.env.NODE_ENV === 'production' ? prod : dev;