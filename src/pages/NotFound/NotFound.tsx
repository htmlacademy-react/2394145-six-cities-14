import { ReactElement } from 'react';
import { AppRoute } from '../../consts';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound(): ReactElement {
  return (
    <div>
      <h1 className={styles.notFoundText}> 404 NOT FOUND</h1>
      <Link to={AppRoute.Main}>
        <button className={styles.goMain}>Main Page</button>
      </Link>
    </div>
  );
}
export default NotFound;
