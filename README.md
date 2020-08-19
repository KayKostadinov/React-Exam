# Social network project AimBoard

### Starting the project locally:

**install dependencies:** npm i && cd client npm i

**start the project:** in the root directory run command 'npm run dev'
The local environment runs the back and front end simultaneously using concurrently with a proxy between them.
The website can be accessed @ http://localhost:3000


### API Documentation
All responses return their data in JSON

#### aim

// @route   POST api/aim
// @desc    create an aim
// @access  private

**required data:** title: string
**optional data:** deadline: date, complete: bool
returns the new aim 
on error: status 500, Server error

// @route   GET api/aim
// @desc    get all aims
// @access  private

returns all aims
on error: status 500, Server error


// @route   GET api/aim/:id
// @desc    get a specific aim
// @access  private

returns the specified aim (id)
on error: status 500, Server error


// @route   DELETE api/aim/:id
// @desc    delete an aim
// @access  private

deletes the specified aim (id) and returns a msg: Aim removed
on error: 
status 401, Not authorized || status 404, Aim not found || status 500, Server error

// @route   POST api/aim/:id
// @desc    update an aim
// @access  private

returns the new aim data
on error: 
status 401, Not authorized || status 404, Aim not found || status 500, Server error

