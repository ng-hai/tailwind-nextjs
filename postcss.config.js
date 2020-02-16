const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    // Specify the paths to all of the template files in project
    content: ["./src/**/*.js"],
    // Include any special characters in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    ["postcss-preset-env", { stage: 1 }],
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
