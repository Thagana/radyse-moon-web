const dev = {
    SERVER_URL: 'http://localhost:4001'
};

const prod = {
    SERVER_URL: 'https://theultimatenew.herokuapp.com'
}


export const config = process.env.NODE_ENV === 'production' ? prod : dev;