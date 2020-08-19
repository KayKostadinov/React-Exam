# AimBoard (social network)
Link to deployed project: http://aimboard.herokuapp.com

## Starting the project locally:

**install dependencies:** npm i && cd client npm i

**start the project:** in the root project directory run command 'npm run dev'.
The local environment runs the back and front end simultaneously using concurrently with a proxy between them.
The website can be accessed @ http://localhost:3000
Both server and client refresh on save.

------------------------------------
# Client Documentation

Global state is managed by Redux. Component-level state is implemented with hooks.
## Components

#### App
Root component.
Handles: 
    
    local storage auth token
    Component routing
    Private/ public routing
    Passes down global state


### Landing & /auth
**Landing renders Login and  Register as a single page.**
#### Landing
#### Login
#### Register



## Redux
**global state init:** store.js and passed down the top-level component in App.js

#### /reducers

**combine reducers in index.js**

**auth**
```
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}
```
handles actions:

    REG_SUCCESS,
    REG_FAIL,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,

**aim**
```
const initialState = {
    aim: null,
    aims: [],
    loading: true,
    error: {}
}
```
handles actions:

    GET_AIM, 
    AIM_ERR, 
    CLEAR_AIM, 
    GET_AIMS, 
    UPDATE_AIM, 
    CREATE_AIM 

**alert**
```
const initialState = []
```
handles actions:

    SET_ALERT, REMOVE_ALERT

**post**
```
const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}
```
handles actions:

    GET_POSTS, 
    POST_ERR, 
    UPDATE_LIKES, 
    DELETE_POST, 
    ADD_POST, 
    ADD_COMMENT

**profile**
```
const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}
```
handles actions:

    GET_PROFILE, 
    PROFILE_ERR, 
    CLEAR_PROFILE, 
    DELETE_ACC, 
    UPDATE_PROFILE, 
    GET_PROFILES

#### /actions


**exported actions types in types.js**

_Each action calls to the corresponding api route and feeds the server response to the reducer_

##### exported action functions:

**aim**

    getAims
    getAim(id)
    createAim(formData)
    updateAim(formData, id)
    deleteAim(id)

**alert**

    setAlert(msg, alertType)

**auth**

    register({ name, email, password })
    loadUser
    login(email, password)
    logout

**post**

    getPosts
    addPost(formData)
    deletePost(id)
    addLike(id)
    removeLike(id)
    addComment(commentForm, id)

**profile**

    getMyProfile
    getAllProfiles
    getProfileById(id)
    createProfile(formData, history, edit = false)
    deleteProfile




------------------------------------
# API Documentation
All responses return their data in JSON

### aim

// @route   POST api/aim
// @desc    create an aim
// @access  private

**required data:** title: string
**optional data:** deadline: date, complete: bool
**returns** the new aim 
**on error:** status 500, Server error

// @route   GET api/aim
// @desc    get all aims
// @access  private

**returns** all aims
**on error:** status 500, Server error


// @route   GET api/aim/:id
// @desc    get a specific aim
// @access  private

**returns** the specified aim (id)
**on error:** status 500, Server error


// @route   DELETE api/aim/:id
// @desc    delete an aim
// @access  private

deletes the specified aim (id) and **returns** a msg: Aim removed
**on error:** 
status 401, Not authorized || status 404, Aim not found || status 500, Server error

// @route   POST api/aim/:id
// @desc    update an aim
// @access  private

**returns** the new aim data
**on error:** 
status 401, Not authorized || status 404, Aim not found || status 500, Server error

