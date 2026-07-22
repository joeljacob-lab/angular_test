| Status Code | Name                       | Meaning                         | Example                       |
| ----------- | -------------------------- | ------------------------------- | ----------------------------- |
| **200**     | OK                         | Request successful              | GET `/users` returns data     |
| **201**     | Created                    | Resource successfully created   | POST `/users` creates a user  |
| **202**     | Accepted                   | Request accepted for processing | Background job started        |
| **204**     | No Content                 | Success but nothing to return   | DELETE user successfully      |
| **301**     | Moved Permanently          | URL permanently changed         | Redirect old website URL      |
| **302**     | Found (Temporary Redirect) | Temporary redirect              | Login redirects temporarily   |
| **304**     | Not Modified               | Cached version is still valid   | Browser uses cached image     |
| **400**     | Bad Request                | Client sent invalid request     | Missing required fields       |
| **401**     | Unauthorized               | Authentication required         | No JWT token provided         |
| **403**     | Forbidden                  | Authenticated but no permission | Normal user tries admin route |
| **404**     | Not Found                  | Resource doesn't exist          | `/users/999` not found        |
| **409**     | Conflict                   | Resource conflict               | Email already exists          |
| **422**     | Unprocessable Entity       | Validation failed               | Invalid email format          |
| **500**     | Internal Server Error      | Server-side error               | Database connection crashed   |
| **503**     | Service Unavailable        | Server temporarily unavailable  | Server under maintenance      |


MVC Architecture:
Model View Controller 
Models are the actual js code that we type to perform a particular task that might be a function or any kind of algo or anything.
Views are actually responsible for holding the data from the js code.Views are the actual UI elements in frontend connected to the modules via the controllers.Whateve the user sees,interacts,performs happens via the View.
Controllers act as a bridge between your models and your views.Your index.html connects with the 

Scope are the variables that hold the data inside the controllers.

ng-binding(data binding)

Databases:
supabase,firebase,mariaDB,cockroachDB


22/7
Pagination