import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import NotFoundPage from '../pages/notFound/notFound.page';

const CharacterPage = lazy(() => import('../pages/character/character.page'));
const CharactersPage = lazy(() => import('../pages/characters/characters.page'));

function Routes() {
  return useRoutes([
    {
      path: '/characters/:page?',
      element: <CharactersPage />,
    },
    { path: 'character/:id', element: <CharacterPage /> },
    { path: '404', element: <NotFoundPage /> },
    { path: '*', element: <Navigate to="/404" /> },
    { path: '', element: <Navigate to="/characters" /> }, // Redirect from the main page to the 'characters' page
  ]);
}

export default Routes;
