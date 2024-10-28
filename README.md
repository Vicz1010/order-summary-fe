# order-summary-fe

This project uses Next.JS to build the frontend and retrieving data from REST API endpoints. Tailwind CSS is used for styling and Axios along with Tanstack Query have been used to handle API Requests and state relating to them.

## Yarn

This project uses yarn and can be installed using npm: `npm install --global yarn`

The backend of this project is configured to accept requests from `localhost:3001`.

So, to start project on port `3001` use the command: `yarn run dev -p 3001`.

## Improvements
- **Navigation buttons** - Have navigation buttons that allows users to go through delivery details of the different users
- **Error page** - Have an Error component that is conditionally rendered if there is a Bad HTTP Request sent to the endpoint. This would also come with a button allowing users to navigate back to previous page for better user journey and User Experience.
- **Notification for inactive buttons** - For buttons that are not functional there could be a pop up notification that explains this to users. This prevents users thinking button has functionality and maybe spends time clicking it for there to be no action.
