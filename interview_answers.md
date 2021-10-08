# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API helps solve the sharing of global data through many components, it helps keep state clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions are objects that tell reducers what they should do with state. They are representations of events that occur on the app.

-Reducers are functions that take action objects and update state depending on that action object. Reducers are a centralized state updater.

-Store is the application state that is managed by reducers. It is a central storage for state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

redux thunk allows us to make asynchronous calls in our action creators. It changes our action-creators by allowing them to call the dispatch function within them.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is redux because it allows for state to be managed in one place and passed to components as need be. I think it's easier and makes more sense to inject state where it is needed rather than passing down props through children of components unnecessarily to get where it needs to be.