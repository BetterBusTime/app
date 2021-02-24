# Better Bus Time

Better Bus Time (BBT) aims to be a better [MTA Bus Time](https://bustime.mta.info/). Portions of the MTA Bus Time application reload the webpage, making for a subpar user experience. BBT is designed to be single page application (SPA) from the start. The user should never become aware of data refreshes happening in the background. Another goal of BBT is to allow users to register and pin their favorite bus routes and bus stops, letting you glance at your personalized homepage for BBT to see the transit information most pertinent to you.

The mobile browser version of MTA Bus Time does not provide the GPS map feature to locate bus stops; a future goal for this project is to integrate GPS map functionality across both mobile and desktop browser environments. With GPS information, it should be possible to calculate walking times to bus stops.

## Installation

Packages are managed via `npm`. Run a `npm ci` command to avoid generating a new `package-lock.json`.

## Technologies Used

The client side application is written in React and communicates with the [MTA OneBusAway API](https://bustime.mta.info/wiki/Developers/OneBusAwayRESTfulAPI) to discover bus routes and bus stops, and the [MTA SIRI API](https://bustime.mta.info/wiki/Developers/SIRIIntro) for real time schedule information. The backend API is written in Django, talking to a PostgreSQL database.

## User stories

### MVP

-   [ ] As a user, I want to quickly search for my bus route.
-   [ ] As a user, I want to quickly find my bus stop.
-   [ ] As a user, I want to quickly view bus times for my stop.
-   [ ] As a user, I want to discover bus routes.
-   [ ] As a user, I want to discover bus stops.
-   [ ] As a user, I want to pin bus routes to my homepage.
-   [ ] As a user, I want to pin bus stops to my homepage.

### Stretch Goals

-   [ ] As a user, I want to quickly search for my bus stop by street address.
-   [ ] As a user, I want to view standard bus schedules.
-   [ ] As a user, I want to locate my bus stop on a map.
-   [ ] As a user, I want the walking time to my stop to be calculated.

## Timeframes

| Tasks                   | Priority | Anticipated | Invested | Total |
| ----------------------- | -------- | ----------- | -------- | ----- |
| Project scaffolding     | H        | 2 hrs       | X        | X     |
| Backend models          | H        | 4 hrs       | X        | X     |
| User authentication     | H        | 4 hrs       | X        | X     |
| RESTful routes          | H        | 4 hrs       | X        | X     |
| Deploy backend          | H        | 2 hrs       | X        | X     |
| Landing page components | H        | 4 hrs       | X        | X     |
| Header components       | H        | 4 hrs       | X        | X     |
| Search functionality    | H        | 4 hrs       | X        | X     |
| Main section components | H        | 8 hrs       | X        | X     |
| Pin routes / stops      | H        | 8 hrs       | X        | X     |
| Deploy frontend         | H        | 2 hrs       | X        | X     |
| Add responsive styles   | M        | 8 hrs       | X        | X     |
| Search stop by address  | M        | 8 hrs       | X        | X     |
| View standard schedules | M        | 4 hrs       | X        | X     |
| Bus stops on GPS map    | M        | 8 hrs       | X        | X     |
| Calculated walking time | M        | 8 hrs       | X        | X     |
| Video presentation      | H        | 12 hrs      | X        | X     |
| Bug fixes               | H        | 20 hrs      | X        | X     |
| Refactoring             | M        | 20 hrs      | X        | X     |
| TOTALS                  | X        | 134 hrs     | X        | X     |

## Anticipated Schedule

| Date   | Deliverable                                     | Status     |
| ------ | ----------------------------------------------- | ---------- |
| Feb 24 | Scaffolding, models, user auth                  | incomplete |
| Feb 25 | Routes, backend deployment, frontend components | incomplete |
| Feb 26 | Frontend components, search                     | incomplete |
| Feb 27 | Frontend components, pin routes / stops         | incomplete |
| Feb 28 | Frontend deployment, responsive styles          | incomplete |
| Mar 1  | Search stops, schedules                         | incomplete |
| Mar 2  | GPS stops, walk times                           | incomplete |
| Mar 3  | Video presentation                              | incomplete |
| Mar 4  | PRESENTATION DAY                                | incomplete |
