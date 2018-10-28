// @flow

import classNames from "classnames";
import PropTypes from "prop-types";
import * as React from "react";
import HelpPopover from "../HelpPopover";

const Controls = ({
    enableFilters,
    onSearch,
    onToggleFilters,
}: {
    enableFilters: boolean,
    onSearch: (SyntheticInputEvent<HTMLInputElement>) => void,
    onToggleFilters: () => void,
}) => {
    return (
        <div className="dataTables_filter">
            <HelpPopover
                placement="bottom"
                style={{ marginRight: "6px" }}
                title="Filtering"
            >
                <p>
                    The main search box looks in all columns, but you can filter
                    on the values in specific columns by clicking the "Filter"
                    button <span className="glyphicon glyphicon-filter" /> and
                    entering text below the column headers.
                </p>
                <p>
                    For numeric columns, you can enter "&gt;50" to show values
                    greater than or equal to 50, "&lt;50" for the opposite, and
                    "=50" for values exactly equal to 50.
                </p>
            </HelpPopover>
            <a
                className={classNames("btn btn-sm btn-light-bordered", {
                    active: enableFilters,
                })}
                onClick={onToggleFilters}
                style={{ marginRight: "6px" }}
                title="Filter"
            >
                <span className="glyphicon glyphicon-filter" />
            </a>
            <label>
                <input
                    className="form-control form-control-sm"
                    onChange={onSearch}
                    placeholder="Search"
                    style={{ width: "200px" }}
                    type="search"
                />
            </label>
        </div>
    );
};

Controls.propTypes = {
    enableFilters: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
    onToggleFilters: PropTypes.func.isRequired,
};

export default Controls;
