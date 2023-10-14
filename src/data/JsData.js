const JsData = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",

    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>",
  },
  {
    id: 2,
    question:
      "Which of the following function of String object returns a string representing the specified object?",
    options: [
      "toLocaleUpperCase()",
      "toUpperCase()",
      "toString()",
      "subString()",
    ],
    answer: "toString()",
  },
  {
    id: 3,
    question:
      "Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?",
    options: ["concat()", "every()", "filter()", "some()"],
    answer: "filter()",
  },
  {
    id: 4,
    question: "Which of the following is correct about JavaScript?",
    options: [
      "JavaScript is a lightweight, interpreted programming language.",
      "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages",
      "The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
      "All of the above.",
    ],
    answer: "All of the above.",
  },
  {
    id: 5,
    question:
      "Which of the following is true about cookie handling in JavaScript?",
    options: [
      "JavaScript can manipulate cookies using the cookie property of the Document object.",
      "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
      "Both of the above",
      "None of the above",
    ],
    answer: "Both of the above",
  },
];

const HTMLData = [
  {
    id: 1,
    question:
      "Which of the following is used to read an HTML page and render it?",
    options: ["Web server", "Web network", "Web browser", "Web matrix"],
    answer: "Web Browser",
  },
  {
    id: 2,
    question: " What is HTML?",
    options: [
      "HTML describes the structure of a webpage",
      "HTML is the standard markup language mainly used to create web pages",
      "HTML consists of a set of elements that helps the browser how to view the content",
      "All of the mentioned",
    ],
    answer: "All of the mentioned",
  },
  {
    id: 3,
    question: "What is the correct syntax of doctype in HTML5?",
    options: [
      "</doctype html>",
      "<doctype html>",
      "<doctype html!>",
      "<!doctype html>",
    ],
    answer: "<!doctype html>",
  },
  {
    id: 4,
    question:
      "Which of the following is not a difference between HTML and XHTML?",
    options: [
      "Charset in both html and xhtml is “text/html",
      "Tags and attributes are case-insensitive in HTML but not in XHTML",
      "Special characters must be escaped using character entities in XHTML unlike HTML",
      "Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml",
    ],
    answer: "Charset in both html and xhtml is “text/html",
  },
  {
    id: 5,
    question: "In which part of the HTML metadata is contained?",
    options: ["head tag", "title tag", "html tag", "body tag"],
    answer: "head tag",
  },
];

const CSSData = [
  {
    id: 1,
    question: " What is CSS?",
    options: [
      "CSS is a style sheet language",
      "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
      "CSS is the language used to style the HTML documents",
      "All of the mentioned",
    ],
    answer: "All of the mentioned",
  },
  {
    id: 2,
    question:
      "Which of the following CSS framework is used to create a responsive design?",
    options: ["django", "rails", "larawell", "bootstrap"],
    answer: "bootstrap",
  },
  {
    id: 3,
    question:
      "Which of the following CSS style property is used to specify an italic text",
    options: ["style", "font", "font-style", "@font-face"],
    answer: "font-style",
  },
  {
    id: 4,
    question:
      "Which of the following are the CSS Extension Prefixes for Webkit?",
    options: ["-chrome", "-web", "-o-", "-webkit"],
    answer: "-webkit",
  },
  {
    id: 5,
    question:
      "Which of the following is the correct syntax to link an external style sheet in the HTML file?",
    options: [
      "<link rel=”stylesheet” href=”style.css” />",
      "<link rel=”stylesheet” src=”style.css” />",
      "<style rel=”stylesheet” src=”style.css” />",
      "<style rel=”stylesheet” link=”style.css” />",
    ],
    answer: "<link rel=”stylesheet” href=”style.css” />",
  },
];
const ReactData = [
  {
    id: 1,
    question: "Which of the following command is used to create react-js-app ?",
    options: [
      "npx create-react-app appname",
      "npm install create-react-app",
      "npx install create-react-app -g",
      "install - l create-react-app",
    ],
    answer: "npx create-react-app appname",
  },
  {
    id: 2,
    question:
      "In React.js which one of the following is used to create a class for Inheritance ?",
    options: ["Create", "Extends", "Inherits", "Delete"],
    answer: "Extends",
  },

  {
    id: 3,
    question: "Which of the following is a way to handle data in React.js ?",
    options: [
      "State & Props",
      "Services & Components",
      "State & Services",
      "State & Component",
    ],
    answer: "State & Props",
  },
  {
    id: 4,
    question: "Which of the following is true regarding Babel ?",
    options: [
      "Compiler",
      "Transpilar",
      "Both of the above",
      "None of the above",
    ],
    answer: "Both of the above",
  },
  {
    id: 5,
    question: "Which of the following is true about key props ?",
    options: [
      "Key props are used to look beauty",
      "Key prop is a way to identify the newly added element",
      "It is one type of attribute of HTML",
      "It is not used in the array",
    ],
    answer: "Key prop is a way to identify the newly added element",
  },
];
export { JsData, HTMLData, CSSData, ReactData };
