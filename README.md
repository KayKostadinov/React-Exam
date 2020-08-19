# Social network project AimBoard

## Starting the project locally:

**install dependencies:** npm i && cd client npm i

**start the project:** in the root directory run command 'npm run dev'
The local environment runs the back and front end simultaneously using concurrently with a proxy between them.
The website can be accessed @ http://localhost:3000

------------------------------------
## Client Documentation

Global state is managed by Redux. Component-level state is implemented with hooks.

### Redux
**global state init:** store.js and passed down in App.js
#### reducers
/reducers

**combine reducers** index.js

**auth**
```
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}
```
    REG_SUCCESS,
    REG_FAIL,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,

**aim**
```const initialState = {
    aim: null,
    aims: [],
    loading: true,
    error: {}
}
```
    GET_AIM, 
    AIM_ERR, 
    CLEAR_AIM, 
    GET_AIMS, 
    UPDATE_AIM, 
    CREATE_AIM 

------------------------------------
## API Documentation
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

