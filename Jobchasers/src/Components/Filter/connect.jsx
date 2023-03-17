import { connect } from "react-redux";
import setVisibilityFilter from "../../actions/filter";
import Filter from "./Filter.jsx";

const getFilterJobs = data => {
    let arrTags = ["Rensa"];
    data.forEach(item =>{
        if (arrTags.indexOf(item.tag) === -1) {
            arrTags.push(item.tag);
        }
    });
    return arrTags;
};

const mapStateToProps = state => ({
    tags: getFilterJobs(state.data),
    active: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
    onClickHandler: tags => dispatch(setVisibilityFilter(tags))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Filter);
