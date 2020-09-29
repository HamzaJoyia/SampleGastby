/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({page,actions}) => {

    const{createPage}=actions;
    
    const AboutPage = path.resolve("./src/pages/about.js");
    const ContactPage = path.resolve("./src/pages/contact.js");
    const HomePage= path.resolve("./src/pages/index.js");

    createPage({
        path: '/',
        component:HomePage
    });
    createPage({
        path:'/about',
        component:'AboutPage'
    })
    createPage({
        path:'./contact',
        component:'Contact'
    })


createPages()
}