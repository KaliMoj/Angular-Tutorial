# Angular-Tutorial
Creating a UI for Spring-Tutorial using Angular and Node.

You're going to be using the endpoints created during the  https://github.com/KaliMoj/Spring-Tutorial exercise to create a user interface using AngularJS and Node.js.

## Functional Requirements

1. The UI application needs to allow a person a user to 
    1. **Register**
    1. **Sign-in**
    1. **View active tasks**
    1. **Create tasks**
    1. **Update tasks**
    1. **De-activate a task**
1. **Register** - allow the user to register. You should provide inputs for the fields that you're collecting on the `POST /user` endpoint. Upon success, display the user's unique ID. This will be the way that a user will sign-in to the applicaiton
1. **Sign-in** - allow the user to sign-in using their unique user ID. You can add more fields if necessary but this is the only required one (we're not making a full authentication solution here)
1. **View active tasks** - once the user signs in the application should display the active tasks of the user in the order they were created
1. **Create tasks** - once a user is signed in, they should be able to create a new task
1. **Update tasks** - once a user is signed in, they should be able to update the description of a task
1. **De-activate tasks** - once a user is signed in, they should be able to delete/de-activate a task

## Technical Requirements
1. The UI must be driven using the MVC Framework AngularJS(AngularJS 1.X not 2.X).
1. The styling of the site can be done with plain CSS, SASS, or a CSS Framework (Bootstrap, Pure.css, etc).
1. The application must be served using a Node.js server. I recommend Express.js for serving your files
1. In the AngularJS code, make sure you use the `controller as propertyName` syntax. If you're unfamiliar with what this means, read up on this: https://docs.angularjs.org/api/ng/directive/ngController. It's unfortunate most AngularJS examples do **not** use this syntax.
1. AngularJS controllers should not invoke HTTP calls directly, HTTP interactions should be left to AngularJS services.
1. If errors occur on the backend, the user must be notified in an user-friendly manner. 
1. Since this UI will most likely have multiple views, I recommend using the [UI Router](https://github.com/angular-ui/ui-router/blob/master/README.md) to use multiple states of your application to create a Single Page Application (SPA). 
