import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import c from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={c.filterLabel}>
      <p className={c.filterTitle}>Find contacts by name</p>
      <input
        className={c.filterInput}
        value={filter}
        name="filter"
        onChange={event => dispatch(filterAction(event.currentTarget.value))}
        type="input"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
