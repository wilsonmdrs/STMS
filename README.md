# Tag Manager

This is the proposed solution for a simple tag manager exercise

![image](https://user-images.githubusercontent.com/43358208/233895269-bc05a76f-016a-4336-86ed-0ec8f4b45a69.png)

You can find the Figma Layout [here](https://www.figma.com/file/Yz5gWbPOX3t7sKM9T1ExE6/tag-manager?node-id=3%3A6&t=l7wj2lxF1K44RQ8J-1)

### The main requirements :

- The user should be able to add, edit and delete tags locally.
- It should list the tags.
- The client will fetch an existing list from a back-end
- it should sync the local tags with a back-end using an API (Bonus).

### Implemented with:

- `React` with `Typescript`
- `StoryBook`
- `styled-components`
- Material UI Components;
- Unit Test with `Jest` and `RTL` for some components
- `React Query` and `Axios` to handle Api Request
- API with `Node` and `Typescript` using express and jsonfile

#### How to Run the Project

#### Frontend
    cd ./application
    yarn or npm install
    yarn start or npm start

#### Backend
    cd ./service
    yarn or npm install
    yarn start or npm start
    
#### How to Run StoryBook
    cd ./application
    yarn storybook or npm run storybook

#### How to Run test
    cd ./application
    yarn test or npm test

