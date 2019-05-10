# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes is is an extension to React that checks data against paramaters set within itself. It does this to make sure that the data being passed through matches the correct type that we tell PropTypes to check it against, be it a string, boolean, number, symbol, object or function. It's important to check our data in Javascript to make sure the correct data is rendering, and that we have the correct data passing through our props so that our components operate the way they were meant to operate.

- [ ] Describe a life-cycle event in React?

A life cycle event is analogous to the life cycle of a person - birth, growth, death. The Mounting Phase is where the component gets passed through the constructor down to the render method - this places the data on the screen. The render method, as it executes, runs through the updating phase. The end of the mounting phase ends as the render method is updating the DOM, citing componentDidMount. In the updating phase, any new props, changes to State (through setState), and re-renders the entire DOM with the updated data. This cites componentDidUpdate. Unmounting is the death phase, where the component is shutdown, nothing is rendered or updated, and componentWillUnmount is cited. 

- [ ] Explain the details of a Higher Order Component?

Thinking back to Higher Order Functions, Higher Order Components act as functions that receive components as arguments and returns a new component. When writing the HOC, the components received as arguments act as callbacks that will hold place for the components to be used when calling the HOC. The key to an HOC is reusability - if we write an HOC using logic that demands using several components the same way, but they cannot be all called together at the same time, we simply structure our code so that it can be reusuable with each pairing of components.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

The first way to style components is through classNames, using CSS or a CSS preprocessor like Less or Sass. ClassNames behaves the same way as a class would in HTML/CSS, through we are using JSX so we must use the classNames syntax. As with CSS in any other project, this allows for simple organization of all styles in one or two files, depending on where each React component references its CSS. 

The second way is to use Reactstrap/Bootstrap. The functionality of Reactstrap brings in Bootstrap styling to our React apps, making styling efficient, and being able to style an entire app in a matter of minutes with the right components in the right places. However, these styles are already set through Reactstrap, so editing colors and border-radius would take some extra time.

The third way is to use the styled-components library. This allows us to create variables in each portion of our React app that are styled directly in the app itself (think inline styling for HTML elements). This is useful, as we can enter our React app, create a styled div variable, and use that same variable in the render method! The drawback is that the ability to edit the style of a certain element is in the file that it is rendered, so making sure each element does not clash with one another can be a chore. 

## Project Setup

Follow these steps to set up your project:

- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [ ] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [ ] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [ ] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [ ] You should now be able to filter cards using your tabs!
- [ ] Make sure all of your props being passed are validated using PropTypes.
- [ ] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
