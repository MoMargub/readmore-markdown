The CustomMarkdownTag component is a React component that provides read-more and show-less functionality for Markdown-formatted content. It allows users to display a portion of the content with an option to expand and view the entire content or collapse it.

Installation
To use the CustomMarkdownTag component, you can follow these steps:

Import Component:

Import the CustomMarkdownTag component in your React file where you want to use it.

Copy code
import CustomMarkdownTag from "readmore-markdown";

Usage
Here's an example of how you can use the CustomMarkdownTag component in your React file:
import CustomMarkdownTag from "readmore-markdown";
import "./App.css";

function App() {
const markdownContent = `
Lorem ipsum dolor sit amet   \`word\` consectetur adipisicing elit. Cumque assumenda laudantium dignissimos animi fuga voluptate deleniti nostrum a, rem, nulla excepturi **bold text** autem. Ad accusamus perferendis, eligendi ducimus optio vitae, at numquam magnam voluptatibus veritatis in ut architecto odio nobis reiciendis quis! Commodi nostrum numquam voluptatum fuga qui? Qui ratione quasi at eos tenetur voluptatibus doloribus [NPM-PACKAGE](https://www.npmjs.com/package/readmore-markdown); numquam velit, exercitationem consequuntur magni a debitis doloremque, ab expedita. Excepturi voluptates _italic text_ suscipit quis omnis iste, quasi perferendis voluptatem nostrum labore delectus veniam dicta voluptatibus, illo facere? Amet fugit accusantium a incidunt voluptatum dolor sed. Numquam officia optio fugit alias veniam eos, architecto tenetur praesentium!
`;

return (
<>
<h1>Vite + React</h1>
<div className="card"></div>

      <div style={{ cursor: "pointer" }}>
        <CustomMarkdownTag content={markdownContent} />
      </div>
    </>

);
}

export default App;

Props

1. readMoreChars: Number of characters to initially display before the "Read more" link appears if you not need that you can skip that do not write readMoreChars then read more and show less functionality will not work.
2. customClassNames: Custom CSS class names to apply to the rendered HTML container.
3. content: The Markdown-formatted content to be rendered by the component.

Features

- Text Formatting: Supports basic Markdown text formatting such as bold, italic, links, images, and inline code.
- Show/Hide Content: Allows users to toggle between displaying the full content and a shortened version with a "Read more" link.
