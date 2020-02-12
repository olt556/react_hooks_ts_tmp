module.exports = {
    plugins: [
        require("autoprefixer")({
            grid: "autoplace",
            browsers: ["ie >= 11"]
        })
    ],
};
