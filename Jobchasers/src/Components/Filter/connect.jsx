import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions/filter";
import Filter from "./Filter.jsx";

const getFilterTags = data => {
    let arrTags = ["Rensa"];
    data.forEach(item =>{
        if (arrTags.indexOf(item.tag) === -1) {
            arrTags.push(item.tag);
        }
    });
    return arrTags;
};

const mapStateToProps = state => ({
    tags: getFilterTags(state.data.tag),
    active: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
    onClickHandler: (tag) => dispatch(setVisibilityFilter(tag))
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Filter);
