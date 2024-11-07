import ReactDOM from 'react-dom/client'
// import React from 'react'
// import App from './App'
// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   'Click Me to visit Google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  anotherElement
)
