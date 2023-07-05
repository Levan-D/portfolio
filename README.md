# Portfolio 

This repository contains the source code for my personal portfolio website, which showcases my experience, skills, and projects. It is a responsive website, designed in Figma, and built with Next.js.

Visit at https://levandolidze.com/

## Features 

- **Personal Information:** Adjust the data structure in the project to reflect your own personal information.
- **Projects Showcase:** Highlight your best projects in an attractive, organized way.
- **Contact Form:** A ready-to-use contact form, you just need to hook it up with your own Google OAuth credentials.


## Installation

1. Clone the repository:
  ```js
git clone https://github.com/Levan-D/portfolio.git
```
2. Install dependencies:
  ```js
npm install
```
3. Start the app:
  ```js
npm run dev
```
4. Open `http://localhost:3000` in your browser
  ```js
http://localhost:3000
```
   
## Configuration

All personal information is stored in the /data directory. Simply replace the provided information with your own.

For example, in data/personalData.ts, you would change the following:


```javascript

export const personalData = {
  profile: {
    name: "Levan Dolidze",
    role: "Web Developer",
    desc: "  I specialize in building accessible...",
    greetings: "Hey! my name is",
  },
...
};

```

### Contact Form

For the contact form, you'll need to obtain your own Google OAuth Client ID:

1. Visit the Google Cloud Console.
2. Create a new project, or select an existing one.
3. Go to "APIs & Services" -> "Credentials".
4. Click on "Create Credentials" -> "OAuth client ID".
5. Choose "Web application", name it, and add `http://localhost:3000` in "Authorized JavaScript origins" and `http://localhost:3000/auth/google/callback` in "Authorized redirect URIs".
6. Save it and copy the client ID to the .env.local file in the root directory of the project.


## Contributing

Contributions are always welcome! If you have an idea for a new feature, find a bug, or would like to contribute code, please submit an issue or a pull request.


## License

CSS Mate is open source software licensed under the MIT License.
