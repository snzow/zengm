// @flow

import PropTypes from "prop-types";
import * as React from "react";

const PerPage = ({
    onChange,
    value,
}: {
    onChange: (SyntheticInputEvent<HTMLSelectElement>) => void,
    value: number,
}) => {
    return (
        <div className="dataTables_length">
            <label>
                <select
                    className="form-control form-control-sm"
                    onChange={onChange}
                    style={{ width: "75px" }}
                    value={value}
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>{" "}
                per page
            </label>
        </div>
    );
};

PerPage.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
};

export default PerPage;
