import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { panelInputChange } from 'src/actions/settings';
import './style.scss';

const FormSearch = ({
    placeholder, inputName, inputValue, handleSubmit,
}) => {
    const dispatch = useDispatch();

    return (
        <form
            className="form-search"
            type="submit"
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(handleSubmit());
            }}
        >
            <input
                className="form-search__input"
                type="text"
                placeholder={placeholder}
                name={inputName}
                value={inputValue}
                onChange={(e) => dispatch(panelInputChange({ [e.target.name]: e.target.value }))}
            />
        </form>
    );
};

FormSearch.propTypes = {
    placeholder: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
};

export default FormSearch;
