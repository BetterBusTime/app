![title banner](https://i.imgur.com/4ioraME.png)

## Better Bus Time will be unavailable until further notice.

Better Bus Time was a project for me to learn full stack web development during my tenure at General Assembly. Part of the learning process was deploying a React app to Heroku. With recent policy changes, Heroku is discontinuing their free dynos. Unfortunately, I do not have the time to research and host with another free provider at this time. Perhaps I will re-deploy Better Bus Time at a future time. Thank you for visiting!

# Better Bus Time

Better Bus Time (BBT) aims to be a better [MTA Bus Time](https://bustime.mta.info/). Portions of the MTA Bus Time application reload the webpage, making for a subpar user experience. BBT is designed to be single page application (SPA) from the start. The user should never become aware of data refreshes happening in the background. Another goal of BBT is to allow users to register and pin their favorite bus routes and bus stops, letting you glance at your personalized homepage for BBT to see the transit information most pertinent to you.

The mobile browser version of MTA Bus Time does not provide the GPS map feature to locate bus stops; a future goal for this project is to integrate GPS map functionality across both mobile and desktop browser environments. With GPS information, it should be possible to calculate walking times to bus stops.

## Screenshots

![landing page](https://i.imgur.com/lOBB9JQ.png)

## Installation

Packages are managed via `npm`. Run a `npm ci` command to avoid generating a new `package-lock.json`.

## Technologies Used

The [MTA OneBusAway API](https://bustime.mta.info/wiki/Developers/OneBusAwayRESTfulAPI) does not provide an `Access-Control-Allow-Origin` header, meaning requests from the browser are blocked due to standard CORS policy. To get around this, the backend acts as a proxy server to sidestep the CORS issue. Otherwise, the frontend is written in React.

## Project planning

There is a planning directory at the root of the repository, that contains all of the material I used to plan out this project.

### MVP

-  [x] As a user, I want to quickly search for my bus route.
-  [x] As a user, I want to quickly find my bus stop.
-  [x] As a user, I want to quickly view bus times for my stop.
-  [x] As a user, I want to discover bus routes.
-  [x] As a user, I want to discover bus stops.
-  [x] As a user, I want to pin bus routes to my homepage.
-  [x] As a user, I want to pin bus stops to my homepage.

### Stretch Goals

-  [ ] As a user, I want to quickly search for my bus stop by street address.
-  [ ] As a user, I want to view standard bus schedules.
-  [ ] As a user, I want to locate my bus stop on a map.
-  [ ] As a user, I want the walking time to my stop to be calculated.

## Timeframes

| Tasks                   | Priority | Anticipated | Invested | Total  |
| ----------------------- | -------- | ----------- | -------- | ------ |
| Project scaffolding     | H        | 2 hrs       | 2 hrs    | 2 hrs  |
| Backend models          | H        | 4 hrs       | 2 hrs    | 2 hrs  |
| User authentication     | H        | 4 hrs       | 12 hrs   | 12 hrs |
| RESTful routes          | H        | 4 hrs       | 8 hrs    | 8 hrs  |
| Deploy backend          | H        | 2 hrs       | 1 hr     | 1 hr   |
| Landing page components | H        | 4 hrs       | 6 hrs    | 6 hrs  |
| Header components       | H        | 4 hrs       | 4 hrs    | 4 hrs  |
| Search functionality    | H        | 4 hrs       | 7 hrs    | 7 hrs  |
| Main section components | H        | 8 hrs       | 4 hrs    | 4 hrs  |
| Pin routes / stops      | H        | 8 hrs       | 3 hrs    | 3 hrs  |
| Deploy frontend         | H        | 2 hrs       | 1 hr     | 1 hr   |
| Add responsive styles   | M        | 8 hrs       | 6 hrs    | 6 hrs  |
| Search stop by address  | M        | 8 hrs       | X        | X      |
| View standard schedules | M        | 4 hrs       | X        | X      |
| Bus stops on GPS map    | M        | 8 hrs       | X        | X      |
| Calculated walking time | M        | 8 hrs       | X        | X      |
| Video presentation      | H        | 12 hrs      | X        | X      |
| Bug fixes               | H        | 20 hrs      | 10 hrs   | 10 hrs |
| Refactoring             | M        | 20 hrs      | 10 hrs   | 10 hrs |
| TOTALS                  | X        | 134 hrs     | 76 hrs   | 76 hrs |

## Anticipated Schedule

| Date   | Deliverable                                     | Status     |
| ------ | ----------------------------------------------- | ---------- |
| Feb 24 | Scaffolding, models, user auth                  | complete   |
| Feb 25 | Routes, backend deployment, frontend components | complete   |
| Feb 26 | Frontend components, search                     | complete   |
| Feb 27 | Frontend components, pin routes / stops         | complete   |
| Feb 28 | Frontend deployment, responsive styles          | complete   |
| Mar 1  | Search stops, schedules                         | incomplete |
| Mar 2  | GPS stops, walk times                           | incomplete |
| Mar 3  | Video presentation                              | incomplete |
| Mar 4  | PRESENTATION DAY                                | incomplete |
