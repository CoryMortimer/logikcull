# Logikcull

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

In the project directory, run:

1. `yarn` to install needed dependencies
1. `yarn start` to open the app in development mode at [http://localhost:3000](http://localhost:3000). The page will reload with every edit and linting errors will be in the console.

## Usage

- Click the arrows in the bottom right corner to paginate between the two pages
- Click the floating plus button to add a new record to the current page.
- Click any cell except the artists to edit the album.
- Click the artist cell to update the artist across all albums.
- Click any cell except artists to open the dialog to display a delete button to delete an album.

## Notes

- When updating an artist, all artists need to be loaded by paginating to both pages in order for artists to be updated across pages.
- Ideally, there would be a confirmation dialog before deletion but I ran out of time.
- The user experience could be improved as to be more obvious as to how to update albums and artists.
- Condition would ideally be formatted in a nicer way. Perhaps a color and formatted text could be displayed for each unique condition.
